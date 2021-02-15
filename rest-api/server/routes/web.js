'use strict'

module.exports = (app) => {
	const fs = require('fs')
	
	const BaseData = {
		'projects': require('../public/_data/profiles'),
	}

	app.get('/', (req, res)=>{
		const project = BaseData.projects
		const data = {
				'title': 'HomePage Website',
				'header': {
					'textContent': 'Welcome in My Rest Api Website'
				},
				'fetch': {
					'projectData': project
				}
		}
		res.render('home', data)
	})


	app.get('/DataPublic', async(req, res) => {
		try{
			const Project = await BaseData.projects
			console.log('Success fetch data')
			// console.log(req.headers)
			res.json(Project)
		}catch(err){
			res.json({message: err})
		}
	})

	app.get('/users', (req, res) => {
		const userData = fs.readFile('./public/_data/users.json', 'utf-8', (err, jsonString) => {
			if(err){
				console.log('File read failed:', err)
			}
			const Users = JSON.parse(jsonString)
			const data = {
				'title': 'UserList Website',
				'header': {
					'textContent': 'Welcome in My List Users'
				},
				'fetch': {
					'userData': Users
				}
			}
			console.log('File data : ', jsonString)
			res.render('users', data)
		})
		
	})

	app.get('/new-users-add', (req, res) => {
		// const addNew = [
		// 	{"name": "Dadan Hermawan"},
		// 	{"name": "Fredy Mardian"},
		// 	{"name": "Dedy Stanzah"},
		// 	{"name": "Ikam Bulak siam"}
		// ]

		// const jsnString = JSON.stringify(addNew)
		
		// fs.writeFileSync('./public/data_public/profile.json', jsnString, err => {
		// 	if(err){
		// 		console.log('Error writing file', err)
		// 	} else {
		// 		console.log('Successfully wrote file')
		// 	}
		// })

		fs.readFile('./public/data_public/profile.json', 'utf-8', (err, jsonString) => {
			if(err){
				console.log('File read failed:', err)
			}

			const Users = JSON.parse(jsonString)
			const data = {
				'title': 'AddUser Page',
				'header': {
					'textContent': 'Welcome in My List Users'
				},
				'fetch': {
					'userData': Users
				}
			}
			console.log('File data : ', jsonString)
			res.render('addUser', data)
		})


	})

}