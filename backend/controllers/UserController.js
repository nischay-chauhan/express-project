const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//@description to register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req , res) =>{
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All the fields are mandatory");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already exists");
    }

    const hashedPassword = await bcrypt.hash(password , 10);
    console.log("hashed password",hashedPassword);
    const user = await User.create({
        username,
        email,
        password : hashedPassword,
    })
    console.log(`user creater ${user}`)
    if(user){
        res.status(201).json({_id: user.id , email : user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid")
    }
    res.json({message : "Register the user"})
});

//@description to login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req , res) =>{
   const {email , password} = req.body;
   if(!email || !password){
    res.status(400);
    throw new Error("All fieldds are mandatory")
   }
   const user = await User.findOne({email});
   //compaer password with hash pasword
   if(user && (await bcrypt.compare(password , user.hashedPassword))){
    const accessToken = jwt.sign({
        id : user._id,
        isAdmin : user.isAdmin
    } , process.env.ACCESS_TOKEN_SECRET,
    {expiresIn : "1m"}
    );
    res.status(200).json({accessToken});
   }else{
    res.status(401)
    throw new Error("email or password is not valid")
   }
    res.json({message : "login the user"})
});

//@description to get current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req , res) =>{
    res.json({message : "current  user info"})
});

module.exports = { registerUser, loginUser, currentUser }
