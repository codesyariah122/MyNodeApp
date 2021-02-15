const express = require('express')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

const path = require('path')

const Router = require('./routes/web')

const bodyParser = require('body-parser')

// set views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "..", "build")))

app.use(express.static('public'))

app.use(Router)

app.get("/", (req, res)=>{
	res.send("Hallo I'm using express")
}).listen(PORT, () => {
	console.log(`Application running on port ${PORT}`)
})