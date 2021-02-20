import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './app/routes/index.js'
import dbconf from './app/config/index.js'
import exphbs from 'express-handlebars'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

dotenv.config()
const app = express()
const PORT = process.env.PORT
const __dirname = fileURLToPath(import.meta.url)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	limit: "30mb", 
	extended: true
}))
app.use(cors())
dbconf()

app.use('/', router)

app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public/'))

app.listen(PORT, () => {
	console.log(`Server running on port : ${PORT}`)
})