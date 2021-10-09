const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const mongo_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/todo-sms-app";
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
  reminderTime: Number,
  reminderMethod: String,
  mobileNumber: String,
  email: String,
});

taskSchema = new Schema({
  userId:String,
  title: String,
  isCompleted: Boolean,
  time: Number,
  reminder: reminderSchema,
});

userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

taskModel = mongoose.model("task", taskSchema);
userModel=mongoose.model("user",userSchema)

module.exports = {taskModel,userModel};
