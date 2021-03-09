// import items needed
const router = require('express').Router();
const store = require('../db/store')

// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
})

// create a post request
router.post('/notes', (req, res) => {
    store.addNotes(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
})
// create a delete request
router.delete('/notes/:id', (req, res) => {
    store.removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
            .catch(err => res.status(500).json(err));


})




module.exports = router;