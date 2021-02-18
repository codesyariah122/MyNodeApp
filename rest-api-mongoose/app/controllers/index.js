import UserData from '../models/index.js'
import mongoose from 'mongoose'

export const getUsers = async(req, res) => {
	try {
		const users = await UserData.find()
		res.status(200).json(users)
	}catch(error){
		res.status(404).json({
			message: error.message
		})
	}
}

export const getUsersById = async(req, res) => {
	const id = req.params.id
	try{
		const users = await UserData.findById(id)
		res.status(200).json(users)
	}catch(error){
		res.status(404).json({
			message: error.message
		})
	}
}

export const createUsers = async(req, res) => {
	const userdata = req.body
	try {
		const newUser = await new UserData(userdata)
		res.status(201).json({
			data: newUser
		})
	}catch(error){
		res.status(409).json({
			message: error.message
		})
	}
}

export const updatedUsers = async(req, res) => {
	const id = req.params.id
	const {fullname, email} = req.body

	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id : ${id}`)

		const users = {fullname, email, id}

	await UserData.findByIdAndUpdate(id, users, {new: true})

	res.json(users)
}

export const deletedUsers = async(req, res) => {
	const id = req.params.id
	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id : ${id}`)

	await UserData.findByIdAndRemove(id)
res.json({
	message: "User deleted successfully"
})
}