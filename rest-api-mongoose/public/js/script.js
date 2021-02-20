const getAllUsers = async(url) => {
	const req = await fetch(url)
	return req
}


const tBody= document.querySelector('.list-users')
getAllUsers('http://localhost:5000/api/users')
.then(res => res.json())
.then( data => {
	const users = data
	// console.log(users)
	users.map(key => {
		const row = document.createElement('tr')
		row.innerHTML=`
			<td>${key.fullname}</td>
			<td>${key.email}</td>
		`
		tBody.appendChild(row)
	})
})