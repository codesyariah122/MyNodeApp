const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
	company: {
		type: String,
		required: true
	},
	img_path: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: true
	},
	year:{
		type: String,
		required: true
	},
	jobdesk:{
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

const PostSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	content:{
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Data', ProjectSchema)