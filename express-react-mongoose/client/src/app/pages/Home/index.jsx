import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ProductList} from '../../components'

const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<h1>Book List</h1>
					</div>

					<div className="col-md-6">
						<ProductList/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home