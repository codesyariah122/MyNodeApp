import Router from 'express'
import {getProducts, getProductsById, createProducts, updatedProducts, deletedProducts} from '../controllers/index.js'
// import {HomePage} from '../controllers/views/index.js'

const router = Router()
// router views
// router.get('/', HomePage)

// route api
router.get('/', getProducts)
router.get('/:id', getProductsById)
router.post('/create', createProducts)
router.put('/updated/:id', updatedProducts)
router.delete('/deleted/:id', deletedProducts)
export default router