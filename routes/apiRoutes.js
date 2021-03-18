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
router.get("/notes",(req,res)=>{

store.writeNotes(req.body);
return res.json(req.body)



})

router.get("/notes/:id",(req,res)=>{

    store.getNotes()
    .then((notes)=>{

const theNotes = {}
for (var i = 0;i<notes.length; i++){

if(notes[i].id === req.params.id){
   theNotes= notes[i];

}

}
console.log(theNotes)
return res.json(theNotes)
    })
 .catch((err)=> res.status(500).json(err))
    



});

router.delete("/notes/:id",(req,res)=>{

store.deleteNotes(req.params.id)
.then((notes)=>{

return res.json(notes)

})

.catch((err)=>res.status(500).json(err));


})






module.exports = router;