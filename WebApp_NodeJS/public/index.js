'use strict';

module.exports = (app) => {
	app.get('/', (req, res) => {
	let data = {
		"title": "Puji.Dev",
		"header": "My ExpressApp",
		"content": "Halo coders<br/> Apakah javascript masih menjadi andil keras bagi perkembangan teknologi"
	}
		res.render('index', data)
	})

	app.get('/about', (req, res) => {
		let data = {
			"title": "About.Dev",
			"header": "About Express.Dev",
			"content": "Halo coders<br/> Saya puji ermanto seorang fullstack-developer. apa kabarnya? kalian"
		}

		res.render('index', data)
	})

	app.get('/contact', (req, res) => {
		let data = {
			"title": "Contact.Dev",
			"header": "Contact Express.Dev",
			"content": "Instagram : <a href='https://instagram.com/pujiermanto' class='btn btn-danger btn-sm'>@pujiermanto</a>"
		}

		res.render('index', data)
	})

}