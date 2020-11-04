
const router = require("express").Router();
const store = require("../db/store");
const { get } = require("./htmlRoutes");
router.get("/api/notes", function (req, res) {
    store
    // this code will execute when the server receives a GET request to api/notes
getNotes();
    // read what is in db.json => using fs module
    fs.readFile("../db.store", function(err, data) { 
        // Check for errors 
        if (err) throw err; 
    })
    // send response with data
    router.post("/api/notes", function (req, res) {
        const newNote = req.body;
            // take new note and add it to db.json using fs module
            app.get("/api/notes", function(req, res){
                res.json(data);
            })
//     // send response that the note was saved
app.post("/api/notes",function(req , res){
res.json(data);
})
});
// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
    });
})
    module.exports = router;