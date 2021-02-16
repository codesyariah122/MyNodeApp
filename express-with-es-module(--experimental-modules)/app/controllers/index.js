import MyModel from '../models/example.js'

const findAll = (req, res) => {
	res.status(200).json(MyModel.AllData())
}

const findById = (req, res) => {
	const id = req.params.id
	res.status(200).json(MyModel.DataById(id))
}

export default {findAll, findById}