const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const app = express();

dotenv.config();
app.use(express.json());
app.use("./img", express.static(path.join(__dirname, "./img")));
console.log(path)

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch(console.log("Error connecting to MongoDB"))
;

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "img")
    }, filename: (req, file, cb) =>{
        cb(null, req.body.name)
        // cb(null, "anna_dog2.png")
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("Image has been uploaded.");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("8080", ()=> {
    console.log("Backend is running.");
})