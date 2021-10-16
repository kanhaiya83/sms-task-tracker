const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;
const testURI="mongodb+srv://schedulerserver404:schedulerserver404@cluster0.qubwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongo_URI =

testURI||  process.env.MONGODB_URI || "mongodb://localhost:27017/todo-sms-app";
mongoose
  .connect(mongo_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((err) => {
    console.log("could not connect to mongoose", err);
  });

reminderSchema = new Schema({
  isSet: Boolean,
  reminderTime: Number
});

taskSchema = new Schema({
  userId:String,
  title: {type:String,required:true},
  isCompleted: {type:Boolean,required:true},
  time: {type:Number,required:true},
  reminder: reminderSchema,
});

userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  mobile:{type:String}
});

taskModel = mongoose.model("task", taskSchema);
userModel=mongoose.model("user",userSchema)

module.exports = {taskModel,userModel};
