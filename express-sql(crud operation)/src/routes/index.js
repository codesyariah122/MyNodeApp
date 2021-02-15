const Router = require('express')
const router = Router()
const session = require('express-session')
const { check } = require('express-validator')
const web = require('../controllers')

router.get('/', web.Home)
router.get('/detail/:id', web.DetailProduct)

router.get('/add-new', web.AddProduct)
router.post('/save', [
	check('name', 'Product name required').notEmpty().exists().withMessage('Product exists on my database'),
	check('price', 'Product price required').isInt().withMessage('Product price interger/number only').notEmpty(),
	check('categories', 'Product categories required').notEmpty(),
	check('description', 'Product description required').notEmpty()

], web.SaveProduct)
	

router.get('/edit/:id', web.EditProduct)
router.post('/update/:id', web.UpdateProduct)

router.get('/delete/:id', web.DeleteProduct)


module.exports=router