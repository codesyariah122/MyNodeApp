const mysql = require('mysql')
require('dotenv').config()

const dbConn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
})

dbConn.connect((err) => {
	if(err) throw err
		console.log('Mysql Connected')
})

module.exports = dbConn