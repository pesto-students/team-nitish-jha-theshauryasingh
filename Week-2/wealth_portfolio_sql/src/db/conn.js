// const sequelize = require('sequelize');

// const sql = new sequelize(

// )
// db.js

const mysql = require('mysql2');

const db = mysql.createConnection ({
  host: '127.0.0.1',
  user: 'root',
  password: 'root@1root',
  database: 'node_auth',
});

module.exports = db;



