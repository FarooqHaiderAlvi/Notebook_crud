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

router.post('/createNote', fetchUser, [
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

//update note with an id route 3 ::
router.put('/updateNote/:id', fetchUser, async (req, res) => {

    const { title, description, tag } = req.body
    const newNote = {}
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    let note = await Notes.findById(req.params.id)

    if (!note) {
        return res.status(401).send("Note Found...")
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Note Found///")
    }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.send({ note })


})

router.delete('/deleteNote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body

    let note = await Notes.findById(req.params.id)

    if (!note) {
        return res.status(401).send("Note Found...")
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Note Found///")
    }

    Notes.findByIdAndDelete({ _id: req.params.id })
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

module.exports = router;