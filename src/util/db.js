const mysql = require('mysql');
const util = require('util');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'id21919721_vimean',
    password: 'V@908080v',
    database: 'id21919721_ecommerce',
   
})

// promise wrapper to enable async await with mysql
db.query = util.promisify(db.query).bind(db);
module.exports = db;
