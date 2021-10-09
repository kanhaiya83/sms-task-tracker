const express = require("express");
const cors = require("cors");
const mongoose=require("./database/mongoose.js")
//router for tasks
const TaskRouter=require("./router/tasks")
const userRouter=require("./router/user")


//defining and port number
const app=express()
const port=process.env.PORT ||4000;
//cors
app.use(cors({origin:"*"}))

app.use(express.json())

//setting up tasks router
app.use(TaskRouter)
app.use(userRouter)

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})
app.listen(port,(req,res)=>{
    console.log("App running on "+ port)
})