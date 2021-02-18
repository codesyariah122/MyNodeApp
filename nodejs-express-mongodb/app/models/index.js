import dbConfig from '../config/db.config.js'
import mongoose from 'mongoose'
import UserModel from './user.model.js'

UserModel.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.users = UserModel(mongoose)


export default db