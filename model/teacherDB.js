const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/classRoom', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{ 
    console.log("MONGO DB SETUP");
})
.catch((err)=>{
    console.log("ERROR!!!");
    console.log(err);
});

const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
        
    },
    subject : {
        type : String,
        required : true
    }
})



const teacherInfo = mongoose.model('teacherSchema' , teacherSchema);
module.exports = teacherInfo;
