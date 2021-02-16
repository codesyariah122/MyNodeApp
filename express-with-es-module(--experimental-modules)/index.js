import Express from 'express'
import Dotenv from 'dotenv'
import Path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import BodyParser from 'body-parser'
import Cors from 'cors'
import CookieParser from 'cookie-parser'
import ExpHbs from 'express-handlebars'
import Router from './app/routes/index.js'

Dotenv.config()
const app = Express()
const port = process.env.PORT
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(BodyParser.json())
app.use(
	BodyParser.urlencoded({
		extended: false
	})
)
app.use(Cors())
app.use(CookieParser())
app.use('/', Router)

app.engine('hbs', ExpHbs({
	defaultLayout: 'main',
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.set('views', Path.join(__dirname, 'views'))


app.listen(port, () => {
	console.log(`Server running on ${port}`)
})

