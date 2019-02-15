// import modules
let express = require("express");
let app = express();
let parser = require('body-parser');

// import NeDB database
const db = require('./store');

// to support JSON-encoded bodies.
app.use(parser.json());

// to support URL-encoded bodies
app.use(parser.urlencoded({
  extended: true
}));

// set app port for connections to listen
app.listen(4500, () => console.log('Listening on port 4500'));