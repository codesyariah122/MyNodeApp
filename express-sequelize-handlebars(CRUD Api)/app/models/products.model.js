module.exports = (sequelize, Sequelize) => {
	
	const Product = sequelize.define('products', {
		name: {
			type: Sequelize.STRING
		},

		price: {
			type: Sequelize.STRING
		},

		categories: {
			type: Sequelize.STRING
		},

		description: {
			type: Sequelize.STRING
		}
	})

	return Product
}