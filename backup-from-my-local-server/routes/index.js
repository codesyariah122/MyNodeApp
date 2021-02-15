'use strict';

module.exports = (app) => {
// const Data = require('../models/Data')
const MyData = require('../MyData')
const Surah = require('../data/surah.json')
// const { caching } = require('./middlewares')
// const SurahHandler = require('../handlers/surah')
const axios = require('axios')
require('dotenv/config')


	app.get('/', (req, res) => {
		const data = {
			"template": "HomeContent.ejs",
			"url": req.originalUrl,
			"brand": "Puji.Dev",
			"title": "Home.Page",
			"parallax": MyData.ParallaxContent[0],
			"polaroid": MyData.PolaroidContent[0],
			"header": "I <span> Love </span> You When You <span> Love </span>",
		}
		
		res.render('index', data)
	})

	app.get('/about', (req, res) => {
		axios({
			method: 'get',
			url: `https://api.github.com/users/${process.env.GITHUB_USERNAME}`
		}).then(response => {
			const aboutData = {
				"template": "AboutContent.ejs",
				"url": req.originalUrl,
				"brand": "Puji.Dev",
				"title": "About.Page",
				"profile": response.data, 
				"parallax": MyData.ParallaxContent[1],
				"polaroid": MyData.PolaroidContent[1],
				"header": "Where <span>Gonna </span>  Make A <span> Big </span> Family"
			}
			res.render('index', aboutData)
		}).catch(err => {
			res.json(err)
		})
	})

	app.get('/project', (req, res) => {
		const data = {
			"template": "ProjectContent.ejs",
			"url": req.originalUrl,
			"brand": "Puji.Dev",
			"title": "Project.Page",
			"projects": MyData,
			"header": "Welcome To <span>Our Place</span>"
		}

			res.render('index', data)		
	})




	// app.get('/project', async (req, res) => {
	// 	try{
	// 		const projects = await Data.find()

	// 		const data = {
	// 			"template": "ProjectContent.ejs",
	// 			"brand": "Puji.Dev",
	// 			"title": "Project.Page",
	// 			"projects": projects,
	// 			"header": "Welcome To <span>Our Place</span>"
	// 		}

	// 		res.render('index', data)			
	// 	}catch(err){
	// 		res.json({message: err})
	// 	}

	// })


	app.get('/api/surah', async(req, res) => {
		try {
			const surah = await Surah
			res.json(surah)
		}catch(err){
			res.json({message: err})
		}
	})

	app.get('/api/surah/:no', (req, res) => {
		const id = req.params.no
		res.send(id)
	})

	app.get('/views', async(req, res)=>{
		
		try{
			const projects = await MyData.ProjectData
			res.json(projects)	
		}catch(err){
			res.json({message: err})
		}
	})

	app.post('/submit', async(req, res)=>{
		const data = new Data({
			company: req.body.company,
			img_path: req.body.img_path,
			description: req.body.description,
			year: req.body.year,
			jobdesk: req.body.jobdesk,
			content: req.body.content,
			link: req.body.link
		})

		try{
			const saveData = await data.save()
			res.json(saveData)
		}catch(err){
			res.json({message: err})
		}

	})


	// app.get('/api/users', (req, res)=>{
	// 	axios({
	// 		method: 'get',
	// 		url: 'https://api.github.com/users/codesyariah122'
	// 	}).then(response => {
	// 		res.json(response.data)
	// 	}).catch(err => {
	// 		res.json(err)
	// 	})
	// })

}
