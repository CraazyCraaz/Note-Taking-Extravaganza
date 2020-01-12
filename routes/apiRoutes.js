var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "notesDB"
})

connection.connect(function (err) {
    if (err) {
        console.log(err);

    }
    console.log("success", connection.threadId);

})

function apiRoutes(app) {
    app.post("/api/notes", function (req, res) {
        console.log(req.body)
        connection.query("insert into notes(note_title, note_text_area) values(?,?)", [req.body.note_title, req.body.note_text_area],
            function (err, result) {
                res.json(result)
            })
    })

}


module.exports = apiRoutes