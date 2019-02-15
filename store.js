// import nedb.
const Datastore = require('nedb');

// variable "db" holds functions to interact with database.
// you can either leave "filename" key empty to create in-memory database, or pass a name for database
// with "db" extension(example: database.db)
const db = new Datastore({filename: 'storage.db', autoload: true});

/* Uncomment down if you need to ensure field_name to have unique constrain.*/
// db.ensureIndex({fieldName: 'field_name', unique: true}, function (err) {
// });

//exports variable db
module.exports = db;