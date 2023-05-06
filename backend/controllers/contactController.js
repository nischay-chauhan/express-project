const asyncHandler = require("express-async-handler")

//@descriptio to get all contacts 
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async(req  , res)=>{
    res.status(200).json({message : "Get all contacts"})
});


//@descriptio to create new contacts 
//@route Get /api/contacts
//@access public
const createContact = asyncHandler(async(req  , res)=>{
    console.log("the request body is : " , req.body)
    const{name , email , number} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message : "create new contacts"})
})

//@descriptio to Get new contacts 
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req  , res)=>{
    res.status(201).json({message : `create new contacts ${req.params.id}`})
})

//@descriptio to update  contacts 
//@route Put /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req  , res)=>{
    res.status(201).json({message : `create new contacts ${req.params.id}`})
})

//@descriptio to delete contacts 
//@route Post /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req  , res)=>{
    res.status(201).json({message : `create new contacts ${req.params.id}`})
})

module.exports = {getContact , createContact , getContacts , deleteContact , updateContact};