import {dbConfig} from '../config/db.config.js'
import Sequelize from 'sequelize'
import {Tutors} from './tutorial.model.js'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorAliases: false,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = Tutors(sequelize, Sequelize)

export default db