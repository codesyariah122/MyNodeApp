import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/index.js'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import exphbs from 'express-handlebars'

export const Server = (port, next) => {
	const app = express()
	const corsOption = {
		origin: 'http://localhost:8080'
	}
	const __dirname = dirname(fileURLToPath(import.meta.url))
	console.log(__dirname)

	app.use(cors(corsOption))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use('/', router)
	app.use(express.static('public'))

	app.engine('hbs', exphbs({
		defaultLayout: 'main',
		extname: '.hbs'
	}))
	app.set('view engine', 'hbs')
	app.set('views', path.join(__dirname, 'views'))

	app.listen(port, next())
}


