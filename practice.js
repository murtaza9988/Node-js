const mongoose =require('mongoose');
const express = require('express');
const {user} = require('./models/user')
const app = express();
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.json()); 
mongoose.connect('mongodb://localhost/exercise')
.then(()=>{
    console.log('connected')
})
.catch((error)=>{
    console.log(error)
})



app.post('/post',async(req,res)=>{
    const usr = new user({
        name:req.body.name,
        isGold:req.body.gold,
        Phone:req.body.phone

    })
     const use = await usr.save();
    res.status(200).send(use)
   })
app.listen(3000)   