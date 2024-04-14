const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser')
// const User=require('../models/User')
const { body, validationResult } = require('express-validator')



// route 1:: fetching all notes of a particular user
router.get('/fetchNotes', fetchUser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error Occured")
    }
})



//  route 2:: adding a note using post request

router.get('/createNote', fetchUser, [
    body('title', 'enter a valid title').isLength({ min: 3 }).exists(),
    body('description', 'enter a valid description').isLength({ min: 5 }).exists(),
    body('tag')

], async (req, res) => {

    const errors = validationResult(req)
    if (!errors) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        notes = await Notes.create({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        })

        res.send(notes)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Occured")
    }

})

module.exports = router;