const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");

dotenv.config()

mongoose.connect(process.env.mongodb_url)
.then(()=>{console.log("Connected successfully")})
.catch((err)=>{console.log(err)});


app.use(express.json());


app.post("/api",(req,res)=>{
    res.send("This is for testing  done by Kiran");
})


app.post("/api/data",(req,res)=>{
    const temp = req.body;
    res.send(temp);
});


app.use("/auth",require('./routes/authroutes'))
app.use("",require("./"))

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});