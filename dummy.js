const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/classRoom', {useNewUrlParser: true, useUnifiedTopology: true})


const studentInfo = require('./model/studentDB')
const teacherInfo = require('./model/teacherDB')





const teach1 = new teacherInfo({
    name : 'Mahima',
    email : 'mahima151@gmail.com',
    subject : 'Mathematics'
})

const teach2 = new teacherInfo({
    name : 'Purnima',
    email : 'purnimaraut@gmail.com',
    subject : 'English'
})

const teach3 = new teacherInfo({
    name : 'Ashok',
    email : 'ashokalpha@gmail.com',
    subject : 'Mathematics'
})

const teach4 = new teacherInfo({
    name : 'Sushil',
    email : 'sushil99@gmail.com',
    subject : 'Hindi'
})

const teach5 = new teacherInfo({
    name : 'Amita',
    email : 'amita11senior@gmail.com',
    subject : 'Science'
})


t1 = await teach1.save()
.then(()=>{
    console.log("TEACHER data stored!!!!!!!!");
})
.catch((err)=>{
    console.log(err);
});
t2 = await teach2.save();
t3 = await teach3.save();
t4 = await teach4.save();
t5 = await teach5.save();





const student1 = new studentInfo({
    name : 'Taani',
    email : 'taaniaggarwal@gmail.com',
    class : 5,
    section : 'B'
})

const student2 = new studentInfo({
    name : 'ram',
    email : 'ram@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student3 = new studentInfo({
    name : 'allen',
    email : 'allen11@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student4 = new studentInfo({
    name : 'zero',
    email : 'zeroo@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student5 = new studentInfo({
    name : 'alpha',
    email : 'alpha1@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student6 = new studentInfo({
    name : 'ginne',
    email : 'ginne@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student7 = new studentInfo({
    name : 'mannu',
    email : 'mannu@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student8 = new studentInfo({
    name : 'Taani',
    email : 'taaniaggarwal@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student9 = new studentInfo({
    name : 'Taani',
    email : 'taaniaggarwal@gmail.com',
    class : 5,
    assignTeacher : '',
    section : 'B'
})

const student10 = new studentInfo({
    name : 'Taani',
    email : 'taaniaggarwal@gmail.com',
    class : 5,
    section : 'B'
})


await student1.save()
.then(()=>{
    console.log("STUDENT1 data stored!!!!!!!!");
})
.catch((err)=>{
    console.log(err);
});
await student2.save();
await student3.save();
await student4.save();
await student5.save();
await student6.save();
await student7.save();
await student8.save();
await student9.save();
await student10.save();