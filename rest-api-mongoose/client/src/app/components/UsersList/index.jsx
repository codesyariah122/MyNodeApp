import React, {Fragment, useEffect, useState} from 'react'

const UsersList = () => {
	let number = 0
	const [userlists, setUserLists] = useState([])

	const getUserLists = async () => {
		try{
			const response = await fetch('http://localhost:5000/api/users')
			const userdata = await response.json()
			setUserLists(userdata)
		}catch(err){
			console.error('Network Error : ', err)
		}
	}

	useEffect(() => {
		getUserLists()
	}, [])

	return (
		<Fragment>
			<table class="table table-dark">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Username</th>
			      <th scope="col">Email</th>
			    </tr>
			  </thead>
			  <tbody>
			  {userlists.map(user => (
			    <tr>
			      <th scope="row">{number += 1}</th>
			      <td>{user.fullname}</td>
			      <td>{user.email}</td>
			    </tr>			  	
			  ))}
			  </tbody>
			</table>
		</Fragment>
	)
}

export default UsersList