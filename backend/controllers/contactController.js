const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@descriptio to get all contacts 
//@route Get /api/contacts
//@access private
const getContacts = asyncHandler(async(req  , res)=>{
    const contacts = await Contact.find({user_id : req.user.id});
    res.status(200).json(contacts);
}); 


//@descriptio to create new contacts 
//@route Post /api/contacts
//@access private
const createContact = asyncHandler(async(req  , res)=>{
    console.log("the request body is : " , req.body)
    const{name , email , number} = req.body;
    if(!name || !email || !number) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        number,
        user_id : req.user.id,
    });

    res.status(201).json({message : contact})
})

//@descriptio to Get new contacts 
//@route get /api/contacts/:id
//@access private
const getContact = asyncHandler(async(req  , res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new error("contact not found")
    }
    res.status(201).json(contact)
})

//@descriptio to update  contacts 
//@route Put /api/contacts/:id
//@access private
const updateContact = asyncHandler(async(req  , res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new error("contact not found")
    }

    if(contact.user_id.toString() !==req.user.id){
        res.status(403);
        throw new Error("user dont have permission to update other user contacts")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    
    res.status(201).json(updateContact)
})

//@descriptio to delete contacts 
//@route Post /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(req  , res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new error("contact not found")
    }

    if(contact.user_id.toString() !==req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other user contacts")
    }

    await contact.deleteOne({_id : req.params.id});
    res.status(201).json(contact)
})

module.exports = {getContact , createContact , getContacts , deleteContact , updateContact};