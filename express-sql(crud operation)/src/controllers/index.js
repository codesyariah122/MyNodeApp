const Products = require('../models')
const session = require('express-session')
const { validationResult } = require('express-validator')

// product query result
exports.Home=(req,res) => {

	Products.viewProduct((err, product) => {
		if(err){
			console.log("Err : ",err)
			res.send(err)
		}else{
			const data = {
				title: "Homepage | Product",
				header: "My Product Page",
				menus: [
					{label: "Home", url: "/"},
					{label: "About", url: "/about"}
				],
				success: req.session.success,
				errors: req.session.errors,
				text: "Successfully added new Product",
				products: product			
			}

			res.render('pages/home', data)
		}
	})

}

exports.DetailProduct = (req, res) => {
	const id = req.params.id
	Products.detailProduct(id, function(err, product){
		if(err){
			res.send(err)
		}

		const data = {
			title: "Detail Product",
			header: "Product Detail Page",
			menus: [
				{label: "Home", url: "/"},
				{label: "About", url: "/about"}
			],
			products: product[0]
		}
		res.render('pages/detail', data)
	})
}


// added and saved product
exports.AddProduct = (req, res) => {
	const data = {
		title: "Add | New Product",
		header: "Add Product Page",
		menus: [
			{label: "Home", url: "/"},
			{label: "About", url: "/about"}
		],
		success: req.session.success,
		errors: req.session.errors,
		text: "Successfully added new Product",
		id: req.session.product_id
	}

	res.render('pages/add', data)
	req.session.errors=null
	req.session.success=null
}

exports.SaveProduct = (req, res, next) => {
	try{
		req.session.success=true
		validationResult(req).throw()
		const new_product = new Products(req.body)
		Products.saveProduct(new_product, (err, rows)=>{
			if(err){
				res.status(304).json({message: err})
			}else{
				req.session.product_id=rows
				res.redirect('/add-new')
			}
		})
	}catch(err){
		req.session.errors=validationResult(req).mapped()
		req.session.success=false
		res.status(400).redirect('/add-new')
	}
}



// edit and update product
exports.EditProduct = (req, res) => {
	const id = req.params.id
	Products.editProduct(id, function(err, product){
		if(err){
			res.send(err)
		}

		const data = {
			title: "Edit Product",
			header: "Edit Product Page",
			menus: [
				{label: "Home", url: "/"},
				{label: "About", url: "/about"}
			],
			products: product[0]
		}

		res.render('pages/edit', data)
	})
}

exports.UpdateProduct = (req, res) => {
	let id=req.params.id
	let data = {
		name: req.body.name,
		price: req.body.price,
		image: req.body.image,
		categories: req.body.categories,
		description: req.body.description
	}

	const update_product = new Products(data)

	if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res.status(400).send({
			error: true,
			message: "please provide all"
		})
	}else{
		Products.updateProduct(id, update_product, function(err, product){
			if(err){
				res.send(err)
			}else{
				res.redirect('/')
			}
		})
	}
}



// Delete Product
exports.DeleteProduct = (req, res) => {
	let id = req.params.id
	Products.deleteProduct(id, function(err, product){
		if(err){
			res.send(err)
		}else{
			res.redirect('/')
		}
	})
}
