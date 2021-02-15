const {Router} = require('express')
// const DataModels = require('../models')
const Home = require('../controllers')
const AllUser = require('../controllers')
const UserId = require('../controllers')
const CreateUser = require('../controllers')
const UpdateUser = require('../controllers')
const DeleteUser = require('../controllers')
const Test = require('../controllers')
const router = Router()

router.get('/', Home.GetHomePage)

router.get('/api/users', AllUser.GetAllUsers)
router.get('/api/users/:id', UserId.GetUsersById)
router.post('/api/users', CreateUser.CreateUsers)
router.put('/api/users/:id', UpdateUser.UpdateUsers)
router.delete('/api/users/:id', DeleteUser.DeleteUsers)
// test api route
router.get('/api/testdata', Test.TestDataApi)

module.exports = router
