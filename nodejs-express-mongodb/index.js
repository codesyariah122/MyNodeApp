import Express from 'express'
import BodyParser from 'body-parser'
import Cors from 'cors'
import Dotenv from 'dotenv'
import db from './app/models/index.js'
import Router from './app/routes/index.js'

Dotenv.config()
const app = Express()
const PORT = process.env.PORT
const corsOption = {
	origin: "http://localhost:5000"
}

app.use(Cors(corsOption))

app.use(BodyParser.json())

app.use(BodyParser.urlencoded({extended: true}))

db.mongoose
.connect(db.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log("Connected to the database")
})
.catch(err => {
	console.log('Cannot connect to the database ! ', err)
	process.exit()
})


// app.get('/', (req, res) => {
// 	res.status(200).json({message: "Welcome to the new world order"})
// })

app.use('/', Router)

app.listen(PORT, () => {
	console.log(`Server running on port : ${PORT}`)
})