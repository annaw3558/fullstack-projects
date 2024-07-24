const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Update user
router.put("/:id", async (req, res)=> {
    if (req.body.userID == req.params.id) {
        //If user is resetting password
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json(updatedUser);
    
        }catch(err){
            res.status(500).json(err);
        }

    }else {
        res.status(401).json("You cannot update this account.")
    }
    
});

//Delete user
router.delete("/:id", async (req, res)=> {
    if (req.body.userID == req.params.id) {
        try{
            const user = await User.findById(req.params.id);
            try{
                //Delete all posts over user first
                await Post.deleteMany({username: user.username});
                //Once all posts are deleted, delete user
                await User.findByIdAndDelete(req.params.id);
                
                res.status(200).json("User has been deleted.");
        
            }catch(err){
                res.status(500).json(err);
            }
    
        }catch(err){
            res.status(500).json("User not found.");
        }

    }else {
        res.status(401).json("You cannot delete this account.")
    } 
});

//Get user
router.get("/:id", async (req, res)=> {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;

        res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router