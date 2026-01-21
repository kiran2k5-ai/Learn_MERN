const express = require("express");
const app = express();

app.post("/api",(req,res)=>{
    res.send("This is for testing  done by Kiran");
})
app.post("/api/data",(req,res)=>{
    req.bo
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});