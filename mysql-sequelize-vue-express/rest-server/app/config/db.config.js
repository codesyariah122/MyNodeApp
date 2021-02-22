import dotenv from 'dotenv'

dotenv.config()

export const dbConfig = {
	HOST: process.env.DB_HOST,
	USER: process.env.DB_USER,
	PASSWORD: process.env.DB_PASS,
	DB: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}