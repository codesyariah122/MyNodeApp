import React from 'react'
import {UsersList} from '../../components'

const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div class="col-12">
						<h1>I'm Home</h1>
					</div>

					<div class="col-12">
						<UsersList/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home