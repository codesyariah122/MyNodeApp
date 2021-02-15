const Router = require('express')
const router = Router()
const ApiController = require('../../controllers/api')

router.get('/api/data', ApiController.findAll)
router.get('/api/data/:id', ApiController.findById)

module.exports=router