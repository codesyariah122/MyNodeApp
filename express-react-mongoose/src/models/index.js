import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
	judul: String,
	penulis: String,
	genre: String,
	penerbit: String,
})

productSchema.method('toJSON', function(){
	const {__v, _id, ...object} = this.toObject()
	object.id = _id
	return object
})

const ProductData = mongoose.model('products', productSchema)

export default ProductData