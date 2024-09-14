const express = require("express");
const router = express.Router()

router.get('',(req,res)=>{
   res.send('hi i am here') 
})

module.exports = router;