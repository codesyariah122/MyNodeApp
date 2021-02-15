const Express = require('express')
const Dotenv = require('dotenv')
const bodyParser = require('body-parser')
const Cors = require('cors')
const Path = require('path')
const Router = require('./routes/index.js')

const app = Express()

require('dotenv').config()

const PORT = process.env.PORT


// middleware
app.use(Cors())
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.use(Express.static('public/assets'))
app.set('views', Path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// app.use(Express.static(Path.join(__dirname, 'client/build')))
// app.get('*', (req, res) => {
//   res.sendFile(Path.join(__dirname+'/client/build/index.html'));
// });
app.use(Router)

app.listen(PORT, () => {
	console.log(`Server running on port : ${PORT}`)
})


