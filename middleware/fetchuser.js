const jwt=require("jsonwebtoken")
const JWT_SECRET = "kanhaiyajwtsecret";

const fetchUser=(req,res,next)=>{
    const token=req.header("auth-token")
    if(!token){
        res.status(401).json({error:"Please provide a valid authToken",message:"Please provide a valid authToken",success:false,invalidAuthToken:true})
    }
    try{
        const data=jwt.verify( token,JWT_SECRET)
         req.user=data.user
         next()
    }
    catch(e){
        res.status(500).send({error:e,message:"Some error occurred!!",success:false,invalidAuthToken:true})
    }
}

module.exports=fetchUser