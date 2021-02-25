import React, {Component} from 'react'

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.welcome}</h1>
			</div>
		)
	}
}


export default Home