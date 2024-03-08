const express = require('express');

const router= express.Router();

router.get('/', (req,res)=>{
    obj={
        name: 'Farooq',
        age: 24
    }
    res.json(obj);
})

module.exports = router;