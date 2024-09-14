const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
app.use(morgan('tiny'))

app.use(express.json()); 
// Connect to MongoDB
mongoose.connect('mongodb://localhost/test')
.then(() => {
    console.log('connected');
})
.catch(() => console.log('not connected'));

// Define schema
const userSchema = new mongoose.Schema({
    name: String,
});

// Create model
const User = mongoose.model("users", userSchema);

app.get('',async(req,res)=>{
    
        const user = await User.find({name: /^meh/}).count();
        
        res.json(user)

    
})
app.post('/post', async (req, res) => {
    try {
        
        // Create a new user from the request body
        const user = new User({
            name: req.body.name
        });

        // Save the new user to the database
        const savedUser = await user.save();

        // Return the saved user
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message }); // Handle errors
    }
});

const courseSchema = new mongoose.Schema({
    title: String,
    hours: Number,
    students:Number,
    name:[String]
})
const Courses = mongoose.model('course',courseSchema)

app.post('/course',async(req,res)=>{
   const course = new Courses({
    title: req.body.title,
    hours:req.body.hours,
    students:req.body.students,
    name: req.body.name
   })
   const savedCourse = await course.save();
   res.status(200).json(savedCourse)
})
app.get('/course-data',async(req,res)=>{
    const courses = await Courses.find({hours:{$gt:4}})
    res.send(courses)
})


app.listen(3000, () => console.log('Server running on port 3000'));

