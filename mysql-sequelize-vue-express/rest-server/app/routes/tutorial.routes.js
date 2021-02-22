import Router from 'express'
import {create, findAll, findAllPublished, findOne, update, deleted, deletedAll} from '../controllers/tutorial.controller.js'

const router = Router()

router.post('/', create)
router.get('/', findAll)
router.get('/published', findAllPublished)
router.get('/:id', findOne)
router.put('/:id', update)
router.delete('/:id', deleted)
router.delete('/', deletedAll)

export default router