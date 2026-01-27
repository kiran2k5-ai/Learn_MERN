const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require("cors")
app.use(cors())

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


// app.use("/auth",require('./routes/authroutes'))
// app.use("/task",require("./routes/taskroutes"))
// app.use("/student",require("./routes/studentroutes"))

const fetchapi = async

app.listen(5000,()=>{
    console.log("server is running on port");
});