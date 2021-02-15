module.exports = app => {
	const products = require('../controllers/product.controller.js')
	const webs = require('../controllers/web.controller.js')


	let ApiRouter = require('express').Router()
	let WebRouter = require('express').Router()

	ApiRouter.post('/create', products.create)
	ApiRouter.get('/views', products.findAll)
	app.use('/api/products', ApiRouter)

	WebRouter.get('/', webs.findAll)
	app.use('/', WebRouter)
}