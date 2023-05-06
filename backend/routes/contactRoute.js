const express = require("express");
const router = express.Router();

router.route("/").get((req , res) =>{
    res.status(200).json({message : "Get all contacts"})
}); 

router.route("/").post((req , res) =>{
    res.status(200).json({message : "create all contacts"})
}); 

router.route("/:id").get((req , res) =>{
    res.status(200).json({message : `Get contacts ${req.params.id}`})
}); 

router.route("/:id").put((req , res) =>{
    res.status(200).json({message : `update contacts ${req.params.id}`})
}); 

router.route("/:id").delete((req , res) =>{
    res.status(200).json({message : `delete  contacts ${req.params.id}`})
}); 



module.exports = router;