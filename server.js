var express = require("express");

var app = express();
// first part, heroku, second local server
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

var htmlRoutes = require("./routes/htmlRoutes")
htmlRoutes(app)

var apiRoutes = require("./routes/apiRoutes")
apiRoutes(app)


app.listen(PORT, function () {
  console.log("app listening on port " + PORT);

})