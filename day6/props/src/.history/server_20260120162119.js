const express = require("express");
const app = express();

app.get(".api",(req,req)=>{
    res.send("This is for testing  done by kiran");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});