const express = require('express');
const router = express.Router();




const players = [
    {
        id: 1,
        name: 'babar',
        role: '02'
    },
    {
        id: 2,
        name: 'rizwan',
        role: '05'  
    }
];

router.get('/players', (req, res) => {
    res.send(players) 
});

router.post('/post', (req, res) => {
    if(!req.body.name ||req.body.name.length<3){
        res.status(400).send('name is not valid')
        return res
    }
    const player = {
        id: players.length + 1,
        name: req.body.name,
        role: req.body.role
    };
    players.push(player);
    res.send(player);
});

module.exports = router;
