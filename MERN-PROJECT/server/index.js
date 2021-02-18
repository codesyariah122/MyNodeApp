import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/index.js'
import dbconf from './config/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	limit: "30mb", 
	extended: true
}))
app.use(cors())
app.use('/', router)

dbconf()
																																																																																																									

app.listen(PORT, () => {
	console.log(`Server running on port : ${PORT}`)
})