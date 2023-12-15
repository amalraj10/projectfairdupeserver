//logic to resolve the request

//import modal
const users = require('../Model/userSchema')

//import JWT
const jwt = require('jsonwebtoken')

//register request
exports.register = async (req,res)=>{
    //extracr data from request body - json-format is converted by javascript object by json() so that we can converted javasScript object json() so that we can directly destructure the keys from the req body
    const {username,email,password}=req.body
try{
   const existUser = await  users.findOne({email})
   if(existUser){
    res.status(406).json('Account already exist....please login ')
   }
   else{

    //need to register the content
    //1)create a objectfor the modal
    
    const newUser = new users({
        username,
        email,
        password,
        github:"",
        linkedin:"",
        profile:""
    })
    //add to mongodb - use save method in mongose
    await newUser.save()


    //response
    res.status(200).json(newUser)
   }
}

catch(err){
   res.status(401).json(`Registration request failed due to ${err}`)
}
}

exports.login = async (req,res)=>{
    //extracr data from request body - json-format is converted by javascript object by json() so that we can converted javasScript object json() so that we can directly destructure the keys from the req body
    const {email,password}=req.body
try{
   const existUser = await  users.findOne({email,password})
   if(existUser){
      //jwt token
      //sign method is used to create token - it excepts two arguments
      //1)payload - information that is secretly transmitted
      //2)secretorprivate - key based on which the token is generated
      
    const token =  jwt.sign({userId:existUser._id},"superstar")
    //sending as object because , we are sending more than one data
    res.status(200).json({existUser,token} )
   }
   else{

   res.status(404).json('invalid users please try again')
   }
}      
                  
catch(err){
   res.status(401).json(`Login request failed due to ${err}`)
}
}
