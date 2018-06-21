const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/shelters'
var db = pgp(connectionString);

module.exports = db;