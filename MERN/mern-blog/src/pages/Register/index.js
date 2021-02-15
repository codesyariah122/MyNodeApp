import React from 'react'
import './register.scss'
import { RegisterBg, LoginBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'

const Register = () => {
	return (
		<div className="mainPage">
			<div className="Left">
				<img src={RegisterBg} className="bg-image" alt="imageBg"/>
			</div>

			<div className="Right">
				<h5 className="title"> Register </h5>
				<Input label="Full Name" placeholder="Full Name"/>
				<Gap height={20}/>
				<Input label="Email" placeholder="Email@email.com"/>
				<Gap height={20}/>
				<Input label="Password" placeholder="Password"/>
				<Gap height={50}/>
				<Button title="Register"/>
				<Gap height={20}/>

				<Link title="Kembil ke login"/>
			</div>
		</div>
	)
}

export default Register