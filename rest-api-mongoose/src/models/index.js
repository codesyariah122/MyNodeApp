import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	fullname: String,
	email: String
})

userSchema.method('toJSON', function(){
	const {__v, _id, ...object} = this.toObject()
	object.id = _id
	return object
})

const UserData = mongoose.model('users', userSchema)

export default UserData