import React from 'react'
import { LoginBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'

const Login = () => {
	return (
		<div className="mainPage">
			<div className="Left">
				<img src={LoginBg} className="bg-image" alt="imageBg"/>
			</div>

			<div className="Right">
				<h5 className="title"> Login Page </h5>
				<Input label="Email" placeholder="Email@email.com"/>
				<Gap height={20}/>
				<Input label="Password" placeholder="Password"/>
				<Gap height={50}/>
				<Button title="Login"/>
				<Gap height={20}/>

				<Link title="Belum punya akun"/>
			</div>
		</div>
	)
}

export default Login