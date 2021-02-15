const dbConn = require('../config/db.config.js')

const Products = function(product){
	this.name = product.name
	this.price = product.price
	this.image = product.image
	this.categories = product.categories
	this.description = product.description
}

Products.viewProduct = (result) => {
	dbConn.query("SELECT * FROM product", (err, res) => {
		if(err) {
			console.log("error : ", err)
			result(null, err)
		}else{
			// console.log("product : ", res)
			result(null, res)
		}
	})
}

Products.saveProduct = function (newProd, result) {
	// res.send(result)
	dbConn.query("INSERT INTO product SET ?", newProd, function(err, res){
		if(err){
			console.log("Error : ", err)
			result(err, null)
		}else{
			console.log(`Successfully added new product ${res.insertId}`)
			result(null	, res.insertId)
		}
	})
}

Products.detailProduct = function(id, result) {
	dbConn.query("SELECT * FROM product WHERE id = ?", id, function(err, res){
		if(err){
			console.log("Error : ", err)
			result(err, null)
		}else{
			result(null, res)
		}
	})
}

Products.editProduct = function(id, result) {
	dbConn.query("SELECT * FROM product WHERE id = ?", id, function(err, res){
		if(err){
			console.log("Error : ", err)
			result(null, err)
		}else{
			result(null, res)
		}
	})
}

Products.updateProduct = function (id, value, result) {
	dbConn.query("UPDATE product SET name=?, price=?, image=?, categories=?, description=? WHERE id=?", [value.name, value.price, value.image, value.categories, value.description, id], function(err, res){
		if(err){
			console.log("Error : ", err)
			result(null, err)
		}else{
			console.log(`Successfully update new product ${value.name}`)
			result(err, res)
		}
	})
}

Products.deleteProduct = function(id, result) {
	dbConn.query("DELETE FROM product WHERE id=?", [id], function(err, res){
		if(err){
			console.log("Error : ", err)
			result(null, err)
		}else{
			result(null, res)
		}
	})
}

module.exports=Products