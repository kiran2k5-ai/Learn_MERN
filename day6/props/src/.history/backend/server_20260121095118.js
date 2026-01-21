const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kiranmrp1310:GL6swim223Mo9oW2@server.1wqnf.mongodb.net/?appName=server").then(()=>(console.log("Connected successfully")))
app.use(express.json());
app.post("/api",(req,res)=>{
    res.send("This is for testing  done by Kiran");
})
app.post("/api/data",(req,res)=>{
    const temp = req.body;
    res.send(temp);
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});