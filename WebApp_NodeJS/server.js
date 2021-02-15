const express = require('express')

const path = require('path')

const port = process.env.PORT || 3000

// const consolidate = require('consolidate')

const routes = require('./public/index.js')


const app = express()

require('dotenv').config();

// app.engine('html', consolidate.swig)

app.use(express.static('public/assets'))

app.set('views', path.join(__dirname, 'public/MyPages'))

app.set('view engine', 'ejs')

routes(app)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})