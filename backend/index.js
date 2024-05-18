const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/users")
require('dotenv').config()

const app = express();

app.use(cors({
    origin: 'https://curd-mern-app-frontend.vercel.app',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());  

// connect to the database
mongoose.connect(process.env.MONGO_URL);

// ************API's***********
// creating new record
app.post("/createUser",(req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// api for getting data from database
app.get("/", (req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
})

// for update of users
app.get("/getUser/:id", (req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.put("/updateUser/:id", (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email})
    .then(user => res.json(user))
    .catch(err=> res.json(err))
})

app.delete("/delete/:id", (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err=> res.json(err))
})

// run server
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
})