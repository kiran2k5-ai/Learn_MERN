const express = require("express");
const app = express();
const env = require()
const mongoose = require("mongoose");
mongoose.connect(mongodb_url)
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

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});