const express = require("express");
//jwt middleware jwt token to req.user.id
const fetchuser=require("../middleware/fetchuser")
//node-cron
var cron = require("node-cron");
//twilio
const twilioAccountSid = "AC9c0c8cffabf8df0e5b80b523515b9197";
const twilioAuthToken = "058bcbfb3951c130f4bcaf73dac768d7";
const twilio = require("twilio")(twilioAccountSid, twilioAuthToken);
//mongoose
const {taskModel} = require("../database/mongoose.js");
const app = express();

app.use(express.json());

const router = express.Router();

const sendSms = (number, message) => {
  twilio.messages
    .create({
      body: "It is a reminder for your task: <" + message + "> is due",
      from: "+12186167746",
      to: number,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => {
      console.log(err);
    });
};
const formatTimeCode = (timeCode) => {
  
  const date = new Date(timeCode);
  const space = " ";
  //format it in "* * * * * *" for node-cron
  const timeParam =
    date.getSeconds().toString() +
    space +
    date.getMinutes().toString() +
    space +
    date.getHours().toString() +
    space +
    date.getDate().toString() +
    space +
    (date.getMonth() + 1).toString() +
    " *";
  return timeParam;
};
const setTimer = (timeCode, number, message) => {

  const time = formatTimeCode(timeCode);
  cron.schedule(
    time,
    () => {
      sendSms(number, message);
    },
    {
      scheduled: true,
      timezone: "Asia/Kolkata",
    }
  );
};

router.get("/tasks",fetchuser, async(req, res) => {
  try{
    const tasks=await taskModel.find({userId:req.user.id})
    res.send({tasks:tasks})

  }
  catch(e){
    res.status(500).send(e)

  }
});

router.post("/tasks",fetchuser,async (req, res) => {
  if (req.body.reminder.isSet) {
    try{
      const reminderTime = req.body.reminder.reminderTime;
    const mobileNumber = req.body.reminder.mobileNumber;
    const taskTitle = req.body.title;
    console.log({reminderTime, mobileNumber, taskTitle})
    setTimer(reminderTime, mobileNumber, taskTitle);}
    catch(e){
      return res.status(500).send({error:e,message:"Some problem occured while saving the task"})
    }
  }
//adding the user parameter
  requestedTask=req.body
  requestedTask.userId=req.user.id
  const task = new taskModel(requestedTask);
  try {
    const savedTask = await task.save();
    return res.send({savedTask});
  } catch (e) {
    res.status(500).send(e)
  }

});
router.delete("/tasks/:id", async(req, res) => {
  try{
  const deleted=await taskModel.findByIdAndDelete(req.params.id)
  if(!deleted){
    return res.status(404).send("Requested task not found")
  }
  res.send(deleted)}
  catch(e){
    console.log(e)
    res.status(500).send()
  }
});



module.exports = router;
