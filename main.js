const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/classRoutes');
// mongoose.connect('mongodb://localhost:27017/classRoom', {useNewUrlParser: true, useUnifiedTopology: true})
// let t1,t2,t3,t4,t5;




// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.json()))
app.use('/', routes);
app.get('/',(req, res) =>{
    
        res.send("hello there");
        console.log("hello");
})

const studentInfo = require('./model/studentDB')
const teacherInfo = require('./model/teacherDB')







app.listen(3000, function (){
    console.log("PORT 3000 LISTENING!!!!");
})






