import mongoose from 'mongoose'

const DbConfig = ()=>{
	mongoose.connect(process.env.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connection success')
	})

	.catch((err) => console.log(err.message))

	mongoose.set('useFindAndModify', false)

}

export default DbConfig
