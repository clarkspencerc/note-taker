const router = require('express').Router(); 
// insert required functions here from index.js/script.js whichever name you decide on
const { notes } = require('../../db/db.json'); 

// GET /api/notes should read db.json file and return all saved notes as JSON 
router.get('/notes', (req, res) =>{
    let results = notes; 
    // am I missing a req statement? - maybe use a required funciton from index/script.js
    res.json(results); 
})
// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file and then return the new note to the client 
// will need a unique ID for each note saved - check NPM packages for this


module.exports = router; 