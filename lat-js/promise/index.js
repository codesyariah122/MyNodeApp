// contoh promise
// let promise = false;

// const Promises = new Promise((resolve, reject) => {
// 	if(promise){
// 		resolve('promises has been kept')
// 	}else{
// 		reject('promise not kept')
// 	}
// })

// Promises
// .then(res => console.log(`Ok ${res} !`))
// .catch(res => console.log(`Its Ok ! ${res}`))

// contoh callback
// function Start(user, email, callBack){
// 	console.log(`
// 		username : ${user} \n
// 		email : ${email}
// 	`)

// 	callBack()
// }

// function getCallback() {
// 	console.log('Memanggil method callback')
// }

// const data = {
// 	user: "amel2",
// 	email: "amel_@mail.com",
// 	method: getCallback
// }

// Start(data.user, data.email, data.method)
// import fetch from 'node-fetch'

// const Users = new Promise( resolve => {
// 	resolve(
// 		fetch('http://localhost:5000/api/users')
// 	)
// })

// let loading = ''
// Users
// .finally(() => {
// 	setTimeout(() => {
// 		loading = 'loading ...'
// 		console.log(loading)
// 	}, 1500)
// })
// .then(res => res.json())
// .then(users => {
// 	setTimeout(() => {
// 		loading = ''
// 		console.log(loading)
// 		console.log(users)
// 	}, 2500)
// })
// .catch(err => console.log(err))

import XMLHttpRequest from 'xhr2'

// const getUsers = (url, success, error) => {
// 	let req = new XMLHttpRequest()
// 	req.open('GET', url)

// 	req.onload = () => {
// 		if(req.readyState === 4){
// 			if(req.status === 200){
// 				success(req.response)
// 			}else if(req.status === 404){
// 				error()
// 			}
// 		}
// 	}

// 	req.onerror = (err) =>{
// 		console.log(err)
// 	}

// 	req.send()
// }

const getUsers = (url) => {
	return 
		new Promise(function(resolve, reject) {
		let req = new XMLHttpRequest()
		req.open('GET', url)

		req.onload = () => {
			if(req.readyState === 4){
				if(req.status === 200){
					resolve(JSON.parse(req.response))
				}else if(req.status === 404){
					reject(Error(req.status))
				}
			}
		}

		req.onerror = () =>{
			reject(Error("Network error"))
		}

		req.send()
	})
} 

// getUsers('http://localhost:5000/api/users', res => {
// 	console.log(res)
// }, (err) => console.log(err))


getUsers('http://localhost:5000/api/users')
.then((response) => {
	console.log(response)
}, (err) => console.log('Fetch data error : ',err))

// import fetch from 'node-fetch'

// const Product = new Promise ( resolve => {
// 	const data = [
// 			{name: "VueJS Hoodie", price: "150000"},
// 			{name: "ReactJS tshirt", price: "120000"}
// 		]
// 	resolve(
// 		data
// 	)
// })

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
// .then(res => {
// 	console.log(res)
// })

// Promise.all([Product, Users])
// .then(res => {
// 	const [Product, Users] = res
// 	console.log(Product)
// 	console.log(Users)
// })