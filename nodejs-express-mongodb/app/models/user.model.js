const UserModel = mongoose => {
	let schema = mongoose.Schema({
		fullname: String,
		email: String,
		// published: Boolean
	}
		// {tim	estamps: true } 
	)

	schema.method("toJSON", function(){
		const {__v, _id, ...object} = this.toObject()
		object.id = _id
		return object
	})

	const User = mongoose.model("users", schema)
	return User
}

export default UserModel