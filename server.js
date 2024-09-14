const express = require('express');
const app = express();
const course = require('./routes/index')
const home = require('./home/index')
const morgan = require('morgan');
app.use(morgan('tiny'))
app.use(express.json()); 
app.use(express.urlencoded())
// app.set('view engine','pug')
// app.set('views','../views')
app.use('/api',home)
app.use('/api',course)
if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    console.log('disabled')
}




app.listen(3000, () => console.log('Server running on port 3000'));