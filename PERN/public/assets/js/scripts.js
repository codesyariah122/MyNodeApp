const list = document.querySelector('.user-list')

console.log("Start")

fetch('http://localhost:5151/api/users')
.then(res => res.json())
.then(res => {
	res.map((key, index) => {
		const data = res[index]
		// console.log(key)
		const liEl = document.createElement('li')
		liEl.setAttribute('id', data.id)
		liEl.textContent=`${data.name} > ${data.email}
		`
		list.appendChild(liEl)
	})
})

console.log("End")


// latihan promise
// let promise = false;

// const Promises = new Promise((resolve, reject) => {
// 	if(promise){
// 		resolve('Promise has been accept')
// 	}else{
// 		reject('Promise not accept')
// 	}
// })


// Promises
// 	.then(res => console.log(`Ok : ${res}`))
// 	.catch(res => console.log(`Not OK ! ${res}`))

// const Movies = new Promise( resolve => {
// 	setTimeout(() => {
// 		resolve(
// 			[
// 				{
// 					judul: 'The Pianist',
// 					sutradara: 'Roman Polanski',
// 					tahun: '2002'
// 				},
// 				{
// 					judul: 'Contact',
// 					sutradara: 'Robert Zemeckis',
// 					tahun: '1997'
// 				}
// 			]
// 		)
// 	}, 1000)
// })

// const Products = new Promise( resolve => {
// 	setTimeout(() => {
// 		resolve(
// 			[
// 				{
// 					nama: 'VueJS Tshirt',
// 					harga: '50k'
// 				},
// 				{
// 					nama: 'ReactJS Hoodie',
// 					harga: '150k'
// 				}
// 			]
// 		)
// 	})
// })

// const Users = new Promise( resolve => {
// 	resolve(
// 		fetch('http://localhost:5151/api/users')
// 	)
// })


// Movies
// 	.then(res => console.log(res))

// Products
// 	.then(res => console.log(res))

// Promise.all([Movies, Products])
// 	// .then(res => console.log(res))
// 	.then( res => {
// 		const [Movies, Products] = res
// 		console.log(Movies)
// 		console.log(Products)
// 	})

// Users
// .then(res => res.json())
// .then( users => {
// 	console.log(users)

// 	users.map(user => {
// 		const liEl = document.createElement('li')
// 		liEl.setAttribute('id', user.id)
// 		liEl.textContent=`Nama : ${user.name} >> Email : ${user.email}`
// 		list.appendChild(liEl)
// 	})
// })