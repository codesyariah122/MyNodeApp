const DataApi = require('../models')
const SampleData = require('../data')

exports.GetHomePage = (req, res) => {
	// const data = {
	// 	title: 'Home Page',
	// 	header: 'Welcome in Home Page'
	// }
	// res.render('index', data)
	res.status(200).json({
		message: 'Hello World'
	})
}

exports.TestDataApi = async(req, res) => {
	try{
		const data = await SampleData.ProjectData
		res.json(data)
	}catch(err){
		console.log(err)
	}
}

exports.GetAllUsers = async(req, res) =>{
	try{
		const user = await DataApi.getAllUsers()
		res.status(200).json(user)
	}catch(err){
			console.log(err)
	}
}

exports.GetUsersById = async(req, res) =>{
	const id = parseInt(req.params.id)
	try{
		const user = await DataApi.getUsersById(id)
		res.status(200).json(user)
	}catch(err){
		console.log(err)
	}
}

exports.CreateUsers = async(req, res) => {
	const { name, email } = req.body
	try{
		const user = await DataApi.createUsers(name, email)
		res.status(200).send(`User added with ID : 	`)
	}catch(err){
		console.log(err)
	}
}

exports.UpdateUsers = async(req, res) => {
	const id = parseInt(req.params.id)
	const {name, email} = req.body
	try{
		const user = await DataApi.updateUsers(id, name, email)
		res.status(200).send(`User modified with id : ${id}`)
	}catch(err){
		console.log(err)
	}
}

exports.DeleteUsers = async(req, res) => {
	const id = parseInt(req.params.id)
	try{
		const user = await DataApi.deleteUsers(id)
		res.status(200).send(`User deleted with id : ${id}`)
	}catch(err){
		console.log(err)
	}
}
