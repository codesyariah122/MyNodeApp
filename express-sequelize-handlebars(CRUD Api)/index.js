const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const db = require('./app/models')
const exphbs = require('express-handlebars')

require('dotenv').config()

const app = express()

let corsOptions = {
	origin: "http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static('public/'))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

db.sequelize.sync({force: false}).then(() => {
	console.log("Drop and re-sync db.")
})

// app.get('/', (req, res) => {
// 	res.json({message: "Welcome in my api"})
// })


require('./app/routes/product.routes')(app)

const PORT = process.env.PORT

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})