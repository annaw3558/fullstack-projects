import express from "express";
import mongoose from "mongoose";
import UserChats from "./models/userChats.js";
import Chat from "./models/chat.js";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const port = process.env.PORT || 3000;
const app = express();

app.use(
  express.json()
  
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongodb")
    } catch (err) {
        console.log(err);
    }
};

app.post("/api/chats", 
  ClerkExpressRequireAuth(),
  async (req, res) => {

  const userId = req.auth.userId;
  const {text} = req.body;
  console.log(text);
  console.log(userId);
  try {
      const newChat = new Chat({
          userId: userId,
          history: [{role: "user", parts: [{ text }]}],
      });
      
      const savedChat = await newChat.save();

      //Check if the user chat exists
      const userChats = await UserChats.find({ userId: userId });
      
      //If doesn't exist, create a new history
      if (!userChats.length) {
          const newUserChats = new UserChats({
            userId: userId,
            chats: [
              {
                _id: savedChat._id,
                title: text.substring(0, 40),
              },
            ],
          });

      await newUserChats.save();
      } else {
          //Chat exists, so push the chat to the existing array
          await UserChats.updateOne(
              { userId: userId },
              {
                $push: {
                  chats: {
                    _id: savedChat._id,
                    title: text.substring(0, 40),
                  },
                },
              }
            );
      res.status(201).send(newChat._id);
      }
  } catch (err) {
      console.log(err);
      res.status(500).send("Error creating chat.");
  }
});

app.get("/api/userchats", 
  ClerkExpressRequireAuth(),
  async (req, res) => {

    const userId = req.auth.userId;
    try {
      const userChats = await UserChats.find({userId});

      res.status(200).send(userChats[0].chats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching user chats")
    }
}); 

app.get("/api/chats/:id", 
  ClerkExpressRequireAuth(),
  async (req, res) => {

    const userId = req.auth.userId;
    try {
      const chat = await Chat.findOne({ _id: req.params.id, userId });
      
      res.status(200).send(chat);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching user chats")
    }
}); 

app.put("/api/chats/:id", 
  ClerkExpressRequireAuth(),
  async (req, res) => {
    const userId = req.auth.userId;

    const { question, answer } = req.body;
    
    const newItems = [
      ...(question
        ? [{ role: "user", parts: [{ text: question }] }]
        : []),
      { role: "model", parts: [{ text: answer }] },
    ];
    try {
      const updatedChat = await Chat.updateOne({ 
        _id: req.params.id, userId }, 
        {
        $push: {
          history: {
            $each: newItems,
          },
        },
        }
      );
      res.status(200).send(updatedChat);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error sending conversation");
    }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});

app.listen(port, () => {
    connect();
    console.log("server running on port 3000...")
});
