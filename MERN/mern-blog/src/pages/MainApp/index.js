import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const MainApp = () => {
	return (
		<div>
			<p>Header</p>
			<Router>
				<Switch>
					<Route path="/create-blog">
						<CreateBlog/>
					</Route>
					<Route path="/detail-blog">
						<DetailBlog/>
					</Route>
					<Route path="/">
						<Home/>
					</Route>
				</Switch>
			</Router>
			<p>Footer</p>
		</div>
	)
}

export default MainApp