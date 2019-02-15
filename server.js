// import modules
let express = require("express");
let app = express();
let parser = require('body-parser');

// set app port for connections to listen
app.listen(4500, () => console.log('Listening on port 4500'));