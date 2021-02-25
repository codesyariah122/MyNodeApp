import React, {Fragment, useEffect, useState} from 'react'

const ProductList = () => {
	const [productlists, setProductLists] = useState([])

	const getProductLists = async () => {
		try{
			const response = await fetch('http://localhost:5000/api/products')
			const productdata = await response.json()
			setProductLists(productdata)
		}catch(err){
			console.error('Network Error : ', err)
		}
	}

	useEffect(() => {
		getProductLists()
	}, [])

	return (
		<Fragment>
			<div className="card">
			  <ul className="list-group list-group-flush">
			  	{productlists.map(product => (
			    	<li className="list-group-item">
				    	<div className="row mx-md-n5">
				    		<div className="col px-md-5">
				    			{product.judul} 
				    		</div>
				    		<div class="col px-md-5">
					    		<span class="badge badge-primary text-right" data-toggle="modal" data-target="#exampleModal">
					    			Detail
					    		</span>
					    	</div>
					    </div>
			    	</li>
			    ))}
			  </ul>
			</div>
		</Fragment>
	)
}

export default ProductList