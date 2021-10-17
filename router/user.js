const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userModel } = require("../database/mongoose.js");
const app = express();
app.use(express.json());

const router = express.Router();
const JWT_SECRET = "kanhaiyajwtsecret";
router.post("/signup", async (req, res) => {
  //check if password is longer than 6 characters
  if (req.body.password.length < 6) {
    return res.status(400).send({success:false,message:"Enter a valid password"});
  }
  //check if a user with same username already exists
  duplicateUsername = await userModel.findOne({ username: req.body.username });
  if (duplicateUsername) {
    return res.status(400).send({success:false,message:"The username already exists"});
  }
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //saves the username and password in database
  const newUser = new userModel({
    username: req.body.username,
    password: hashedPassword,
    mobile:req.body.mobile
  });
  try {
    const savedUser = await newUser.save();

    const jwtPayload = {
      user: {
        id: savedUser.id,
      },
    };
    const authToken = await jwt.sign(jwtPayload, JWT_SECRET);

    res.send({success:true, authToken });
  } catch (e) {
    return res.status(500).send({ success:false,message:"Some Error occured",error: e });
  }
});

router.post("/login", async (req, res) => {try{
  const { username, password } = req.body;

  const user =await  userModel.findOne({ username: username });
  if (!user) {
    return res
      .status(400)
      .send({
        success:false,
        error: "some error occurred",
        message: "No user found with given username",
      });
  }
  const checkPassword=await bcrypt.compare(password,user.password)
  if(!checkPassword){
      
    return res
    .status(400)
    .send({
success:false,
      error: "some error occurred",
      message: "Enter a valid password",
    });
  }
  const jwt_payload={
      user:{
          id:user.id
      }
  }
  const authToken=jwt.sign(jwt_payload,JWT_SECRET)
  return res.send({success:true,authToken})}

catch(e){
res.status(500).send()
}})

router.post("/getuser",require("../middleware/fetchuser"),async (req,res)=>{
   userId=req.user.id
  try{
    const userFound=await userModel.findById(userId).select("-password")
    res.send(userFound)
  }
  catch(e){
      res.status(500).send({error:e})
  }
})

module.exports = router;
