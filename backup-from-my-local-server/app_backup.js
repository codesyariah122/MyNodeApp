const express = require('express')

const path = require('path')

const async = require('express-async-await')

const fetch = require('node-fetch')

const port = process.env.PORT || 3000

// const consolidate = require('consolidate')

const routes = require('./routes/index.js')


const app = express()

require('dotenv').config();

// app.engine('html', consolidate.swig)

app.use(express.static('public/assets'))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')


routes(app)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})