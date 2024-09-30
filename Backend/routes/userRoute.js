const user = require('../models/User');
const router = require("express").Router();
const bcrypt = require("bcrypt");

//Register
router.post("/register", async(req, res)=>{
    try{
        //generte new passwoard
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.passwoard, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            passwoard: req.body.passwoard,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user_id);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router; 

