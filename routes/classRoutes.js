const express = require('express');
const studentInfo = require('../model/studentDB');
const teacherInfo = require('../model/teacherDB');

const routes = express.Router();

routes.get('/enterStudent', (req, res) =>{
    let htmlSend = `
    <form method="post" action="/addStudent">
    <input type="text" name="name">
    <input type="text" name="email">
    <input type="text" name="studentClass">
    <input type="text" name="section">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})


routes.post('/addStudent', async (req, res) =>{
    // console.log(req.body);
    
    
    let {name, email, studentClass, section} = req.body;

    if(!name || !email || !studentClass || !section)
    {
        return res.status(400).send("please enter all the parameters");
    }
    // Student.create({data}, (err, res) =>{
    //     if(err)
    //     {
    //         console.log("error in adding student", err);
    //     }
    //     else{

    //     }
    // })
    console.log(section);
    if(!(section !== 'A' || section !== 'B' || section !== 'C' || section !== 'D'))
    {
        return res.status(400).send("please enter a valid section type");
    }
    if(isNaN(studentClass))
    {
        return res.status(400).send("class is not vailid");
    }
    else{
        studentClass = Number(studentClass);
        if(studentClass < 1 || studentClass > 12)
        {
            return res.status(400).send("please enter class between the range of 1 to 12");
        }
    }
    const studentValue = new studentInfo({
        name : name,
        email : email,
        studentClass : studentClass,
        section : section
    })
    let result = await studentValue.save();
    result['message'] = "details entered sucessfully";
    return res.status(200).send(result);

})





routes.get('/enterTeacher', (req, res) =>{
    let htmlSend = `
    <h1>Teacher data</h1>
    <form method="post" action="/addTeacher">
    <input type="text" name="name">
    <input type="text" name="email">
    <input type="text" name="subject">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})


routes.post('/addTeacher',async (req, res) =>{
    console.log(req.body);
    
    
    let {name, email, subject} = req.body;

    if(!name || !email || !subject)
    {
        return res.status(400).send("please enter all the parameters");
    }
    const teacherValue = new teacherInfo({
        name : name,
        email : email,
        subject : subject,
    })
    let result = await teacherValue.save();
    result['message'] = 'details entered successfully';
    return res.status(200).send(result);

})





routes.get('/assignTeacher', (req, res) =>{
    let htmlSend = `
    <h1>Assign Teacher</h1>
    <form method="post" action="/assigning">
    <input type="text" name="studentId">
    <input type="text" name="teacherId">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})


routes.post('/assigning',async (req, res) =>{
    // console.log(req.body);
    
    let {studentId, teacherId} = req.body;

    if(!studentId || !teacherId)
    {
        return res.status(400).send("please enter all the parameters");
    }


    var student = await studentInfo.findOne({_id : studentId}); //6149e36eb374723f2297f0a7
    var teacher = await teacherInfo.findOne({_id : teacherId}); //6149e6697ae0c164df8461ed

    console.log(student, "this is my datata    = = == = = " , teacher)
    if(!student || !teacher) 
        return res.status(400).send("student or teacher is not defined");

    student.assignTeacher = teacherId;
        await student.save();
    return res.status(200).send("successfully assigned Teacher");

})







routes.get('/home/filterTeacher', (req, res) =>{
    let htmlSend = `
    <h1>enter subject</h1>
    <form method="post" action="/filterBySubjectTeacher">
    <input type="text" name="subject">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})


routes.post('/filterBySubjectTeacher',async (req, res) =>{
    // console.log(req.body);
    
    let {subject} = req.body;

    if(!subject)
    {
        return res.status(400).send("please enter all the parameters");
    }
    console.log(subject, "this si subject", typeof(subject));
    // subject = JSON.stringify(subject);
    teacherInfo.find({subject : subject}, (err, result) =>{
        if(err)
        {
            console.log(err);
            return res.status(400).send("couldn't find data");
        }
        else{
            console.log(result);
            res.status(200).send(result);
        }

    });
    // if(!teacher) 
    // return res.status(400).send("data not found");
    // else
    // return res.status(200).send(teacher);

})

routes.get('/home/filterStudentByClass', (req, res) =>{
    let htmlSend = `
    <h1>Enter subject</h1>
    <form method="post" action="/filterByClass">
    <input type="text" name="studentClass">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})


routes.post('/filterByClass', (req, res) =>{
    // console.log(req.body);
    
    let {studentClass} = req.body;

    if(!studentClass)
    {
        return res.status(400).send("please enter all the parameters");
    }

    studentInfo.find({studentClass : studentClass}, (err , data)=>{
        if(err)
        {
            console.log(err);
            res.status(400).send("data not found");
        }
        else{
            console.log(data);
            res.status(200).send(data);
        }
    });

})
routes.get('/home/filterStudentBySection', (req, res) =>{
    let htmlSend = `
    <h1>Enter section</h1>
    <form method="post" action="/filterBySection">
    <input type="text" name="section">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})
routes.post('/filterBySection', (req, res) =>{
    // console.log(req.body);
    
    let {section} = req.body;

    if(!section)
    {
        return res.status(400).send("please enter all the parameters");
    }

    studentInfo.find({section : section}, (err,data)=>{
        if(err) 
         return res.status(400).send("data not found");
        else
        return res.status(200).send(data);
    })   

})







routes.get('/home/getStudentByTeacherId', (req, res) =>{
    let htmlSend = `
    <h2>Enter teacher Id to find student</h2>
    <form method="post" action="/getByTeacherId">
    <input type="text" name="teacherId">
    <button type="submit">click</button>
</form>`
    res.send(htmlSend);
})


routes.post('/getByTeacherId', (req, res) =>{
    // console.log(req.body);
    
    let {teacherId} = req.body;

    if(!teacherId)
    {
        return res.status(400).send("please enter all the parameters");
    }

    var student = studentInfo.find({assignTeacher : teacherId});
    if(!student) 
    return res.status(400).send("data not found");
    else
    return res.status(200).send(student);

})



routes.get('/printData',async  (req, res) =>{
    let htmlSend = `<h1>Student And Teacher Data</h1>`
    var Studentdata;
    var Teacherdata;
    Studentdata = await studentInfo.find({});
    Teacherdata = await teacherInfo.find({});
    console.log(Studentdata, Teacherdata);
    if(!Studentdata || !Teacherdata) 
    return res.status(400).send("data not found");
    else
    return res.status(200).send(htmlSend+Studentdata+Teacherdata);
    
})





module.exports = routes;