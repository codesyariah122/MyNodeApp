require('dotenv').config()

const Pool = require('pg').Pool
const poolUsers = new Pool({ 
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT
	// url: process.env.DB_URL
})

const poolPortfolios = new Pool({
	user: process.env.PROD_URL,
	host: process.env.PROD_HOST,
	database: process.env.PROD_NAME,
	password: process.env.PROD_PASS,
	port: process.env.PROD_PORT,
	conectionString: process.env.PROD_URL,
	ssl: {
		rejectUnauthorized: false
	}
})
// console.log(process.env.PROD_PASS)
// poolPortfolios.connect()
module.exports = {poolUsers, poolPortfolios}