//const app = require('express');
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
const express = require("express");
const multer = require("multer");
//const Profile = require("./src/mongo");
//const http = require('http').Server(app);
//const mongoose = require('mongoose');
const mongodb = require('mongodb');

mongoose.connect("mongodb+srv://gtalukdar627:sC7qzW6uzc2GEgJZ@cluster0.tkq7xul.mongodb.net/?retryWrites=true&w=majority");

const Profile = require("./models/mongo");


const app = express();
const http = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");

const staticpath = path.join(__dirname,"");
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/profile",(req,res)=>{
    res.render("profile");
})

let Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});
let upload = multer({
    storage:Storage
}).single("image");

app.post("/signup",upload,async (req,res)=>{
    const data = {
        Name:req.body.name,
        Email:req.body.mail,
        Mail_passord:req.body.password,
        Password:req.body.profile_password,
        Confirm_Password:req.body.profile_confirm_password,
        Address:req.body.local_address,
        Phone_no:req.body.phone_no,
        Image:req.file.filename
    }
    await Profile.insertMany([data]);
    res.render("profile",{
        Profile_name:req.body.name,
        Profile_email:req.body.mail,
        Profile_password:req.body.password,
        Profile_address:req.body.local_address,
        Profile_contact:req.body.phone_no,
        Profile_image:req.file.filename
    });
})

app.listen(7000,()=>{
    try{
        console.log("The server is running on port 7000");
    }
    catch(err){
        console.log(err);
        console.log("Err detected.Connection Successful");
    }
})



http.listen(3000,function(){
    console.log('server is running');
})