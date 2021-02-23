import {AllData, DataById } from '../models/example.js'

const findAll = (req, res) => {
	res.status(200).json(AllData())
}

const findById = async(req, res) => {
	const id = req.params.id
	try{
		const Data = await DataById(id)
		res.status(200).json(Data)
	}catch(err){
		res.status(400).json({
			message: err.message
		})
	}
}

export default {findAll, findById }