const express=require('express');
const route = require('./routes/route');
const cors = require('cors');
const app=express();
const path=require('path');

const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0/studentDB',(err)=>{
    if(!err)
    {
        console.log("Database connected successfully");
    }
    else{
        console.log(err);
    }
});

app.use(cors());
app.use(express.json());
app.use('/attendence',express.static(path.join(__dirname,'attendence')));

app.use('/',route);


app.listen(8000,()=>{
    console.log("Server started at 8000");
})