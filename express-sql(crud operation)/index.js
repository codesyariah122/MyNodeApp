const express = require('express')
const path = require('path')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const exphbs = require('express-handlebars')
const router = require('./src/routes')
const api = require('./src/routes/api')

require('dotenv').config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
)
app.use(cors())
app.use(cookieParser())
// app.use(expressValidator)
app.use(session({
	secret: 'positronx',
	saveUninitialized: false,
	resave: false
}))

app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('resources'))

app.use('/', router)
app.use('/', api)


app.listen(PORT, () => {
	console.log(`Server runnning on port : ${PORT}`)
})