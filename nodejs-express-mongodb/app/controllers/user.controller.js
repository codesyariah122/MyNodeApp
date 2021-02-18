import db from '../models/index.js'

const User = db.users

const create = (req, res) => {
	const DataUser = req.body
	if(!DataUser){
		res.status(400).send({
			message: "Content can not be empty !"
		})
	}

	const user = new User(DataUser)

	user
	.save()
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message: 
				err.message || "Some error occured while creating user data"
		})
	})
}

const findAll = (req, res) => {
	User.find()
	.then(data => {
		res.status(200).json({
			data: data
		})
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "Some eror occured while retrieving users."
		})
	})
}

const findByOne = (req, res) => {
	const id = req.params.id

	User.findById(id)
	.then(data => {
		if(!data)
			res.status(404).send({
				message: `Not found user with id ${id}`
			})
		else res.send(data)
	})
	.catch(err => {
		res
		.status(500)
		.send({
			message: `Error retrieving Tutorial with id = ${id}`
		})
	})
}

const update = (req, res) => {
	if(!req.body){
		return res.status(400).send({
			message: "Data to update can not be empty !"
		})
	}

	const id = req.params.id

	User.findByIdAndUpdate(id, req.body, {
		useFindAndModify: false
	})
	.then(data => {
		if(!data){
			res.status(404).send({
				message: `Cannot update user with id=${id}. Maybe User was not found`
			})
		}else res.send({
			message: "User was updated successfully."
		})
	})

	.catch(err => {
		res.status(500).send({
			message: `Error updating user with id = ${id}`
		})
	})
}

const deleted = (req, res) => {
	const id = req.params.id

	User.findByIdAndRemove(id)
	.then(data => {
		if(!data){
			res.status(404).send({
				message: `Cannot delet User with id=${id}. Maybe User was not found`
			})
		}else{
			res.send({
				message: "User was deleted successfully"
			})
		}
	})
	.catch(err => {
		res.status(500).send({
			message: `Could not delete User with id = ${id}`
		})
	})
}

const deleteAll = (req, res) => {
	User.deleteMany({})
	.then(data => {
		res.send({
			message: `${data.deletedCount} Users were deleted successfully`
		})
	})
	.catch(err => {
		res.status(500).send({
			message: 
			err.message || "Some error occurred while removing all user"
		})
	})
}

export default {
	create,
	findAll,
	findByOne,
	update,
	deleted,
	deleteAll
}