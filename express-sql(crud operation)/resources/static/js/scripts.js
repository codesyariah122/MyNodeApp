const cardList = document.querySelector('.product-list')
const loading = document.querySelector('.loading')
const detail = document.querySelector('#detail')

const getProduct = new Promise((resolve, reject) => {
	resolve(
		fetch('http://localhost:5000/api/data')
	)
})

const getProductById = (id) =>  {
		return new Promise(resolve => {
		resolve(
			fetch(`http://localhost:5000/api/data/${id}`)
		)
	})
}
getProduct
.finally(() => {
	setTimeout(() => {
		loading.style.visibility="hidden"
	}, 1500)

})
.then(res => res.json())
.then(data => {
	setTimeout(() => {
		const products = data.data
		products.map(prod => {
			const liEl = document.createElement('li')
			liEl.className="list-group-item text-muted"
			liEl.innerHTML = `
					${prod.name}
					<a href="#"  data-toggle="modal" data-target="#exampleModal"><span class="detail badge badge-pill badge-success float-right" data-id="${prod.id}">Detail</span></a>
			`
			cardList.appendChild(liEl)
		})
	}, 1500)
})
.catch((err) => console.log("Fetching data errors : ", err))


document.addEventListener('click', function(e){
	const classID = e.target.classList.contains('detail')
	if(classID){
		const dataID = e.target.dataset.id
		getProductById(dataID)
		.then(res => res.json())
		.then(data => {
			const product = data.data
			product.map(rows => {
				document.querySelector('.modal-body').innerHTML=`
					<div class="card mb-3">
					  <img class="card-img-top" src="assets/images/${rows.image}.jpg" alt="Card image cap">
					  <div class="card-body">
					    <h5 class="card-title">${rows.name}</h5>
					    <small class="text-primary">${rows.categories}</small>
					    <p class="card-text">${rows.description}.</p>
					    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
					  </div>
					</div>
				`
			})
		})
	}
})