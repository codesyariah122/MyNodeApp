import React from 'react'
import './input.scss'

const Input = ({label, ...rest}) => {
	return (
		<div className="input-wrapper">
			<label className="label">{label}</label>
			<input {...rest} className="input"/>
		</div>
	)
}

export default Input