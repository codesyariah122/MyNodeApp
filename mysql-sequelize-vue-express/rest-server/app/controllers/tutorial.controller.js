import db from '../models/index.js'

const Tutorial = db.tutorials
const Op = db.Sequelize.Op

export const create = (req, res) => {
	if(!req.body.title){
		res.status(400).send({
			message: "Content can not be empty !"
		})
		return
	}

	// create data from input user
	const tutorial = {
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published: false
	}

	// save tutorial to database
	Tutorial.create(tutorial)
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Some error occurred while creating the tutorial."
		})
	})
}

export const findAll = (req, res) => {
	const title = req.query.title
	let condition = title ? { title: {[Op.like]: `%${title}` }} : null

	Tutorial.findAll({where: condition})
	.then(data => {
		res.send(data)
	})

	.catch(err => {
		res.status(500).send({
			message: 
				err.message || "Some error occurred while retrieving tutorial."
		})
	})
}

export const findOne = (req, res) => {

	const id = req.params.id

	Tutorial.findByPk(id)
	.then(data => {
		res.send(data)
	})

	.catch(err => {
		res.status(500).send({
			message: `Error retrieving with id=${id}`
		})
	})

}

export const update = (req, res) => {
	const id = req.params.id
	Tutorial.update(req.body, {
		where: {id: id}
	})

	.then(num => {
		if(num == 1){
			res.send({
				message: "Tutorial was updated successfully"
			})
		}else{
			res.send({
				message: `Cannot update tutorial with id=${id}. Maybe tutorial was not found or req.body is empty`
			})
		}
	})

	.catch(err => {
		res.status(500).send({
			message: `Error updating tutorial with id=${id}`
		})
	})
}

export const deleted = (req, res) => {
	const id = req.params.id

	Tutorial.destroy({
		where: {id: id}
	})

	.then(num => {
		if(num == 1){
			res.send({
				message: "Tutorial was deleted successfully"
			})
		}else{
			res.send({
				message: `Cannot delete tutorial with id=${id}. Maybe tutorial was not found or req.body is empty`
			})
		}
	})

	.catch(err => {
		res.status(500).send({
			message: `Could not delete tutorial with id=${id}`
		})
	})
}

export const deletedAll = (req, res) => {
	Tutorial.destroy({
		where: {},
		truncate: false
	})

	.then(num => {
		res.send({
			message: `${num} Tutorials were deleted successfully`
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while removing all tutorials"
			})
		})
	})
}

export const findAllPublished = (req, res) => {
	Tutorial.findAll({
		where: {
			published: true
		}
	})
	.then(data => {
		res.send(data)
	})

	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Some error occurred while retrieving tutorials."
		})
	})
}