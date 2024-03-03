const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/user_managment_system");


const express = require("express");
const app =express();
const nocache= require('nocache')
app.use(nocache())

//For user routes
const userRoute= require('./routes/userRoute')
app.use('/',userRoute)

//For Admin routes
const adminRoute= require('./routes/adminRoute')
app.use('/admin',adminRoute)


app.listen(4000,()=>{
console.log("Port running at http://localhost:4000/ ");
})