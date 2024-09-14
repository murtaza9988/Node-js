const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.json()); 
mongoose.connect('mongodb://localhost/exercise')
.then(()=>{
    console.log('conenected')
})
const CoursesData = new mongoose.Schema({
    title:{
       type: String,
       minlength:2,
       maxlength:3,
       required:true
    },
    tags:{
        type:Array,
        validate:{
            validator: function (v){
                return v.length>0
            },
            message: 'Tags should be atleast one.'
                
        }
    },
    students:Number,
    teacher_Name: String,
    hours: Number,
    week_days: Date,
    class: String,
    is_active:Boolean
})

const Course = mongoose.model('courses',CoursesData)

app.post('/api/post',async(req,res)=>{
    const courses = new Course ({
        title:req.body.title,
        tags:req.body.tags,
        students:req.body.students,
        teacher_Name:req.body.teacher_name,
        hours:req.body.hours,
        week_days:req.body.days,
        class:req.body.class,
        is_active:req.body.active
    })
    const saved = courses.save();
    res.status(201).json(saved);
})
app.get('/get/:id',async(req,res)=>{
    const id = req.params.id
    const course = await Course.findByIdAndDelete(id)
    
    res.status(200).send('deleted')

})
app.listen(3000,()=>console.log('ok'))