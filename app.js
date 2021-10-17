const express = require("express");
const cors = require("cors");
const mongoose=require("./database/mongoose.js")
//router for tasks
const TaskRouter=require("./router/tasks")
const userRouter=require("./router/user")
const path = require('path');

//defining and port number
const app=express()
const port=process.env.PORT ||4000;
//cors
app.use(cors({origin:"*"}))

app.use(express.json())
app.use(express.static(path.resolve(__dirname, './build')));
//setting up tasks router
app.use(TaskRouter)
app.use(userRouter)

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"./build/index.html")
})
app.listen(port,(req,res)=>{
    console.log("App running on "+ port)
})