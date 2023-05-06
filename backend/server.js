const express = require("express");
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/contacts" , (req , res)=>{
    res.status(200).json({message : "Get all the contacts"})
    console.log("Welcome to the contacts")
})

app.listen(port , ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})