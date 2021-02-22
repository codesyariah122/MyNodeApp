import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './app/models/index.js'
import router from './app/routes/tutorial.routes.js'

dotenv.config()
const app = express()
const corsOptions = {
		origin: 'http://localhost:8081'
	}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync()

app.use('/', router)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))