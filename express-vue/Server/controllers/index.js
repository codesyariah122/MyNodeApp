import { getAllData, getDataById } from '../models/index.js'

export const HalloMessage = (req, res) => {
	const data = {
		title: 'HomePage',
		header: 'Express HandleBars',
		footer: `Copyright@${new Date().getFullYear()}`,
		welcome: {
			message: 'Welcome in My HomePage'
		},
	}

	res.render('pages/home', data)
}


export const allData = async(req, res) => {
	const data = await getAllData()
	try{
		res.json({
			data: data
		})
	}catch(err){
		res.status(404).json({
			error: err.message
		})
	}
}

export const dataById = async(req, res) => {
	const id = req.params.id
	try{
		const data = await getDataById(id)
		res.status(200).json({
			data: data
		})
	}catch(err){
		res.status(404).json({
			error: err.message
		})
	}
}