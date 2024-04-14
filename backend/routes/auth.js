const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser')
const JWT_SECRET = "learnmern";

//creating a user using post request
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).exists(),
], async (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        //  check whether email in unique or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry user with email already exists." })
        }

        const salt = await bcrypt.genSalt(10);
        const secPas = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPas
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_SECRET);
        res.json({ token });


    } catch (error) {
        console.error(error.message);
        res.status(500).send("interal server error occured.");
    }

})

//route 2: for logIn
router.post('/login', [
    body('email').isEmail(),
    body('password', "password cannot be empty").exists(),
], async (req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ error: "invalid email or password" })
        }
        //compare password from the post data and the original user database and return true/false
        const passwordCompare =await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            res.status(400).json({ error: "invalid email or password" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_SECRET);
        res.json({ token });

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("interal server error occured.");
    }



})


//route 3: getting info of login user

router.post('/getUser', fetchUser ,async (req, res) => {

    try{
        
        userId=req.user.id
        const user= await User.findById(userId).select("-password")
         res.send(user)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("interal server error occured.");
    }


})



module.exports = router;