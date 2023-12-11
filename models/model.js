const mongoose=require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno : {
        type:Number,
        required:true
    },
    attended_classes:{
        type:Number,
        required:true
    },
    total_classes:{
        type:Number,
        required:true
    },
    percent:{
        type:Number,
    }
})

const studentModel= mongoose.model("student",schema);

module.exports = studentModel;