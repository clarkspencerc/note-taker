const router = require('express').Router(); 
const { createNewNote } = require('../../lib/notes'); 
//const { getAndRenderNotes } = require('../../public/assets/js/index'); 
const { notes } = require('../../db/notes.json'); 

router.get('/notes', (req, res) =>{
    let results = notes; 
 //   getAndRenderNotes(); 
    res.json(results); 
})
router.post('/notes', (req, res) =>{
    req.body.id = notes.length.toString(); 
    const note = createNewNote(req.body, notes);
    res.json(note); 
});

module.exports = router; 