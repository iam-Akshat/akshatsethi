const express = require('express');
const ejs     = require('ejs');
const helmet  = require('helmet');
const rateLimit= require('./middlewares/rateLimit')
require('dotenv').config();
const app= express()

if (process.env.NODE_ENV==='production'){
    app.use(rateLimit());
}

//app.set('view engine', 'ejs'); not needed as of now

app.use(express.static("public"));
app.use(helmet());
app.get('/',function(req,res){
    res.sendFile("index.html")
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started at "+`${process.env.PORT || 3000}`);
});
