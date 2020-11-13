const router = require("express").Router();
const fs = require("fs");
const {
    v4: uuidv4
} = require('uuid');

router.get("/api/notes", function (req, res) {
    const db = fs.readFileSync("./db/db.json")
    res.json(JSON.parse(db))

})
router.post("/api/notes", function (req, res) {
    console.log(req.body)
    const object = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    console.log(object)
    const db = JSON.parse(fs.readFileSync("./db/db.json"))
    db.push(object)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(object)
})
router.delete("/api/notes/:id", function (req, res) {
    const db = JSON.parse(fs.readFileSync("./db/db.json"))
    fs.writeFileSync("./db/db.json", JSON.stringify(db.filter(item => item.id !== req.params.id)))
    res.status(200).end()
})


module.exports = router;