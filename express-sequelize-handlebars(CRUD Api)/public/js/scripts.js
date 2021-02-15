async function getProductData() {
	const products = await fetch('http://localhost:5000/api/products')
	return products
}

const list = document.querySelector('#product-list')
const loading = document.querySelector('#loading')
const tdEl = document.createElement('td')

loading.style.visibility="visible"
list.innerHTML=''
getProductData()
.finally(() => {
	setTimeout(()=>{
		loading.style.visibility="hidden"
	}, 1500)
})
.then( res => res.json())
.then( res => {
	loading.style.visibility="hidden"
	let no=0;
	res.map(data => {
		console.log(data.name)
		const tdEl = document.createElement('td')
		tdEl.innerHTML=`
		<tr>
			<th scope="row">${no+=1}</th>
			<td>${data.name}</td>
			<td>
				<a onClick="" class="btn btn-success btn-sm"> Detail </a>
			</td>
		</tr>
		`
		list.appendChild(tdEl)
	})
})