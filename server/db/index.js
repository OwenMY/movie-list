const mysql = require('mysql2');

const connection = mysql.connection({
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});

