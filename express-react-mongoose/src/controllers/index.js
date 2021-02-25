import ProductData from '../models/index.js'
import mongoose from 'mongoose'

export const getProducts = async(req, res) => {
	try {
		const products = await ProductData.find()
		res.status(200).json(products)
	}catch(error){
		res.status(404).json({
			message: error.message
		})
	}
}

export const getProductsById = async(req, res) => {
	const id = req.params.id
	try{
		const products = await ProductData.findById(id)
		res.status(200).json(products)
	}catch(error){
		res.status(404).json({
			message: error.message
		})
	}
}

export const createProducts = async(req, res) => {
	const ProductData = req.body
	try {
		const products = new ProductData(ProductData)
		await products.save()
		res.status(201).json({
			data: products
		})
	}catch(error){
		res.status(409).json({
			message: error.message
		})
	}
}

export const updatedProducts = async(req, res) => {
	const id = req.params.id
	const {judul, penulis, genre, penerbit} = req.body

	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id : ${id}`)

		const products = {judul, penulis, genre, penerbit, id}

	await ProductData.findByIdAndUpdate(id, products, {new: true})

	res.json(products)
}

export const deletedProducts = async(req, res) => {
	const id = req.params.id
	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id : ${id}`)

	await ProductData.findByIdAndRemove(id)
	res.json({
		message: "Product deleted successfully"
	})
}