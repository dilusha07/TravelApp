const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pinsRoute");

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

mongoose 
 .connect(process.env.MONGO_URL)   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

 app.use(`/api/pins`, pinRoute);
 
  

app.listen(3001, ()=>{
    console.log("Backend server is running!");
});


