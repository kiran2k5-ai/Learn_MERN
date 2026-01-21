const express = require("express");
const app = express();

app.get(".api",(res,req)=>{
    res.send("This is for testing  done by kiran");
})

app.listen(3000)