import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/routes/index.js'
import dbconf from './src/config/index.js'
import exphbs from 'express-handlebars'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import react from 'express-react-views'

dotenv.config()
const app = express()
const PORT = process.env.PORT
const __dirname = fileURLToPath(import.meta.url)
const corsOptions = {
	origin: 'http://localhost:3000'
}

// handle request client
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	limit: "30mb", 
	extended: true
}))
app.use(cors(corsOptions))

dbconf()

app.use('/', router)

// views
// with handle bars
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// with react express views
// app.set('view engine', 'jsx')
// app.engine('jsx', react.createEngine())
// app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public/'))

app.listen(PORT, () => {
	console.log(`Server running on port : ${PORT}`)
})