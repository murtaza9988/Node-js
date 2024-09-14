const express = require('express');
const app = express();
const courses = [
  {id:1,name:'bio'},
  {id:2,name:'math'},
  {id:3,name:'phy'},
  {id:4,name:'eng'}
]
app.get('/course',(req,res)=>{
  res.send(courses)
})
app.get('/home',(req,res)=>{
  res.send('this is the test')
})
app.get('/courses/:id',(req,res)=>{
  const course = courses.find(c => c.id ==parseInt(req.params.id))
  if(!course) res.status(404).send('not found');
  res.send(course)

})
app.listen(8000,()=>console.log('working'))
