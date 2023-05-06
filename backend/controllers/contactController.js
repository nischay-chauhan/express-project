//@descriptio to get all contacts 
//@route Get /api/contacts
//@access public
const getContacts = (req  , res)=>{
    res.status(200).json({message : "Get all contacts"})
}


//@descriptio to create new contacts 
//@route Get /api/contacts
//@access public
const createContact = (req  , res)=>{
    res.status(201).json({message : "create new contacts"})
}

//@descriptio to Get new contacts 
//@route Get /api/contacts/:id
//@access public
const getContact = (req  , res)=>{
    res.status(201).json({message : `create new contacts ${req.params.id}`})
}

//@descriptio to update  contacts 
//@route Put /api/contacts/:id
//@access public
const updateContact = (req  , res)=>{
    res.status(201).json({message : `create new contacts ${req.params.id}`})
}

//@descriptio to delete contacts 
//@route Post /api/contacts/:id
//@access public
const deleteContact = (req  , res)=>{
    res.status(201).json({message : `create new contacts ${req.params.id}`})
}

module.exports = {getContact , createContact , getContacts , deleteContact , updateContact};