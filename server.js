// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express

// configuration =================

app.use(express.static(__dirname));                 // set the static files location /public/img will be /img for users

// listen (start app with node server.js) ======================================
app.listen(8090, "0.0.0.0");
console.log("App listening on port 8090");
