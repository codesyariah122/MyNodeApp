import Router from 'express'
import WebController from '../controllers/web.controller.js'
import UserController from '../controllers/user.controller.js'

const router = Router()

router.get('/', WebController.HomePage)


// router api
router.get('/api/users', UserController.findAll)

router.get('/api/users/:id', UserController.findByOne)

router.post('/api/users/create', UserController.create)

router.put('/api/users/updated/:id', UserController.update)

router.delete('/api/users/deleted/:id', UserController.deleted)

export default router