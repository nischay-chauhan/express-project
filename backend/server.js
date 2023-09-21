const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/db");
const dotenv = require('dotenv').config()
const app = express();

connectDb();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts" , require("./routes/contactRoute"));
app.use("/api/users" , require("./routes/userRoute"));
app.use(errorHandler);

app.listen(port , ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})