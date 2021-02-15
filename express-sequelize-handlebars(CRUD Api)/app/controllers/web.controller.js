const db = require('../models')
const Product = db.products
const Op = db.Sequelize.Op

// create and save a new products
exports.create = (req, res) => {
	if(!req.body.name) {
		res.status(400).send({
			message: "Content cant not be empty!"
		})
		return
	}

	const product = {
		name: req.body.name,
		price: req.body.price,
		categories: req.body.categories,
		description: req.body.description
	}

	Product.create(product)
	.then( data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Some error occurred while creating the products"
		})
	})
}

// Retrieve all products
exports.findAll = ( req, res) => {
	const name = req.query.name
	let condition = name ? { name: { [Op.like]: `%${name}%`}} : null;

	Product.findAll({where: condition})
	.then(rows => {
		const data = {
			title: "Product Homepage",
			header: "Welcome in my Product Page",
			product: rows,
		}
		
		res.render('home', data)
	})
	.catch(err => {
		res.status(200).send({
			message:
				err.message || "Some error occurred while retrieve products"
		})
	})
}

// Find a single products
exports.findOne = (req, res) => {
	const id = req.params.id

	Product.findByPk(id)
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving product with id = "+id
		})
	})
}

// update products
exports.update = (req, res) => {
	const id = req.params.id

	Product.update(req.body, {
		where: {id: id}
	})

	.then(num => {
		if(num == 1) {
			res.send({
				message: "Product was updated successfully"
			})
		}else{
			res.send({
				message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty`
			})
		}
	})

	.catch(err => {
		res.status(500).send({
			message: "Error updating Product with id="+id
		})
	})
}

// delete specified product
exports.delete = (req, res) => {
	const id = req.params.id

	Product.destroy({
		where: {id: id}
	})

	.then(num => {
		if(num ===1) {
			res.send({
				message: "Product was delete successfully!"
			})
		}else{
			res.send({
				message: `cannot delete Product with id=${id}. Maybe product was not found!`
			})
		}
	})

	.catch(err => {
		res.status(500).send({
			message: "Could not delete Product with id="+id
		})
	})
}

// delete all products
exports.deleteAll = (req, res) => {
	Product.destroy({
		where: {},
		truncate: false
	})

	.then(nums => {
		res.send({ message: `${num} Products were deleted successfully!`})
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Some error occurred while removing all products"
		})
	})
}
