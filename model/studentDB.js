const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/classRoom', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{ 
    console.log("MONGO DB SETUP");
})
.catch((err)=>{
    console.log("ERROR!!!");
    console.log(err);
});

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
        
    },
    studentClass : {
        type : Number,
        min : 1,
        max : 12,       //as class cant be more than 12th
        required : true
        
    },
    assignTeacher : {
        type : String
        
    },
    section : {
        type : String,
        enum : ['A', 'B', 'C', 'D'],
        required : true
    }
})

const studentInfo = mongoose.model('studentSchema' , studentSchema);
module.exports = studentInfo;