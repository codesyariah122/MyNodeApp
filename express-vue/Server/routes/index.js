import Router from 'express'
import { HalloMessage, allData, dataById } from '../controllers/index.js'

const router = Router()


router.get('/', HalloMessage)

router.get('/api/data', allData)
router.get('/api/data/:id', dataById)

export default router