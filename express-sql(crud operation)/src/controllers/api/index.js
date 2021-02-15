const ProductApi = require('../../models')

exports.findAll=((req, res) => {
	ProductApi.viewProduct((err, rows)=>{
		if(err){
			res.status(200).json({data: null})
		}else{			
			res.status(200).json({
				data: rows
			})
		}
	})
})

exports.findById=((req, res) => {
	const id = req.params.id
	ProductApi.detailProduct(id, (err, rows) => {
		if(err){
			res.status(200).json({data: null})
		}else{
			res.status(200).json({
				data: rows
			})
		}
	})
})
