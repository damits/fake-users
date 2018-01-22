var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var users = require('./routes/users');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(['/users', '/clients'], users);

var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("App is running on port " + port);
});
module.exports = app;
