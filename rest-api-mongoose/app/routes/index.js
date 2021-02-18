import Router from 'express'
import {getUsers, getUsersById, createUsers, updatedUsers, deletedUsers} from '../controllers/index.js'

const router = Router()

router.get('/api/users', getUsers)
router.get('/api/users/:id', getUsersById)
router.post('/api/users/create', createUsers)
router.put('/api/users/updated/:id', updatedUsers)
router.delete('/api/users/deleted/:id', deletedUsers)
export default router