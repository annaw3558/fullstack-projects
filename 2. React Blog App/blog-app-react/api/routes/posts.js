const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create new post
router.post("/", async (req, res)=> {

    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err);
    }
});

//Update post
router.put("/:id", async (req, res)=> {
    try{
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },{
                    new: true
                });
                res.status(200).json(updatedPost);

            }catch(err){
                res.status(401).json("You cannot update this post.")
            }
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete post
router.delete("/:id", async (req, res)=> {
    try{
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await Post.delete();
                res.status(200).json("Post has been deleted.");

            }catch(err){
                res.status(401).json("You cannot delete this post.")
            }
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//Get post
router.get("/:id", async (req, res)=> {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).json(err);
    }
})

//Get all posts from user or specific category
router.get("/", async (req, res)=> {
    const username = req.query.user;
    const category = req.query.cat;
    try{
        let posts;
        if (username) {
            posts = await Post.find({username});

        } else if (category) {
            posts = await Post.find({categories: {
                $in: [categories]
            }});

        } else {
            posts = await Post.find();
        }

        res.status(200).json(posts);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router