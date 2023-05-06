const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name : {
        type:String,
        required : [true , "please add the contact name"]
    },
    email : {
        type:String,
        required : [true , "Please add the email address"]
    },
    number : {
        type:String,
        required : [true , "Please enter a phone number"]
    },
}, {timestamps : true,}
);

module.exports = mongoose.model("contact" , contactSchema)