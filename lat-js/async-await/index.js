import fetch from 'node-fetch'

function dataUser(username, email){
	console.log(`
		Username: ${username} \n
		Email : ${email}
	`)
}


const getUser = async(url) => {
	let req = await fetch(url)
	return req
}

getUser('http://localhost:5000/api/users')
.then(res => res.json())
.then(res => {
	console.log(res)
})
.catch(err => console.log(err))

// setTimeout(() => console.log("Program pertama"), 2500)

// setTimeout(() => console.log("Program kedua"), 1500)
// setTimeout(() => console.log("Program ketiga"), 1000)

// const Product = new Promise(resolve) => {
// 	const data = [
// 		{name: "sikat gigi", price: "15000"},
// 		{name: "pasta gigi", price: "25000"}
// 	]
// 	resolve(
// 		JSON.parse(data)
// 	)
// }

// const Users = new Promise( resolve => {
// 	resolve(
// 		fetch('http://localhost:5000/api/users')
// 	)
// })

// Users
// .then(res => res.json())
// .then(res => {
// 	console.log(res)
// })

// Product
// .then(res => res.json())
// .then(res => {
// 	console.log(res)
// })