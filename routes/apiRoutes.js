// ==============================================================================
// DEPENDENCIES
// mysql npm is to connect to Heroku (database server) to send / pull / delete data from
// ==============================================================================
var mysql = require("mysql");
// ==============================================================================
// Creates connection variable to mysql
// Five (5) standards we're using in class are
//      host: The hostname of the database you are connecting to. (Default: localhost)
//      port: The port number to connect to. (Default: 3306)
//      user: The MySQL user to authenticate as
//      password: The password of that MySQL user
//      database: Name of the database to use for this connection (Optional)
// ==============================================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "notesDB"
});
// ==============================================================================
// Function to connect
// ==============================================================================
connection.connect(function (err) {
    if (err) {
        console.log(err);

    }
    console.log("success", connection.threadId);

});
// ==============================================================================
// API POST Requests
// Handles when a user hits save and then submits data to the server
// Submits form data (a JSON object)
// JSON is pushed to JavaScript array
// Server saves the data to the tableData array
// ==============================================================================
function apiRoutes(app) {

    app.post("/api/notes", function (req, res) {
        console.log(req.body)
        connection.query("insert into notes(note_title, note_text_area) values(?,?)", [req.body.note_title, req.body.note_text_area],
            function (err, result) {
                res.json(result)
            })
    })
};
// ==============================================================================
// Allows for file to be used in another file
// Exports info
// ==============================================================================
module.exports = apiRoutes