const mongoose =require('mongoose');
const User = mongoose.model("User",new mongoose.Schema({
    name:{
       type:String,
       required:true,
       maxlength:10,
       minlength:2
    },
    isGold:Boolean,
    Phone:{
       type:String,
       required:true,
       minlength:11
    }
   }))
exports.user = User   