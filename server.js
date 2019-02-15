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

// GET
app.get("/api", (req, res) => {
  db.find({}, (err, resp) => {
    if (err) {
      console.log(err);
    } else
      res.json(resp);
  });
});

// POST
app.post('/api', (req, res) => {
  db.insert(req, (err, resp) => {
    if (err) {
      console.log(err);
    } else
      res.json(resp);
  });
});

// GET (view / edit)
app.get('/api/:id', (req, res) => {
  db.findOne({_id: req.params.id}, {}, (resp, err) => {
    if (err) {
      console.log(err);
    } else
      res.json(resp);
  });
});

// PUT (single)
app.put('/api/:id', (req, res) => {
  db.update({_id: req.params.id}, {$set: req.body}, (err, numReplaced) => {
    if (err) {
      console.log(err);
    } else
      res.json(numReplaced);
  });
});

// set app port for connections to listen
app.listen(4500, () => console.log('Listening on port 4500'));