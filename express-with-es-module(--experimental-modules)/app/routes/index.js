import Router from 'express'
import ApiController from '../controllers/index.js'

const router = Router()

router.get('/', (req, res) => {
	const data = {
		title: "HomePage API",
		header: "Welcome to the new world order",
		footer: `Copyright@${new Date().getFullYear()}`
	}
	res.render('pages/home', data)
})

router.get('/api/data', ApiController.findAll)
router.get('/api/data/:id', ApiController.findById)


export default router
