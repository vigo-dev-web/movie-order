import React, { ChangeEvent, useState } from 'react'

interface ITextdField {
	label: string
	name: string
	value: string
	onChange: (target: ChangeEvent<HTMLInputElement>) => void
	type: string
	error?: string
}

const TextField = ({ label, name, value, onChange, type, error, ...rest }: ITextdField) => {
	const getInputClasses = () => {
		return 'form-control' + (error ? ' is-invalid' : '')
	}
	// const toggleShowPassword = () => {
	// 	setShowPassword((prevState) => !prevState)
	// }
	const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onChange({ name: target.name, value: target.value })
	}

	return (
		<div className='mb-4'>
			<label htmlFor={name}>{label}</label>
			<div className='input-group has-validation'>
				{name === 'message' ? (
					<textarea
						id={name}
						name={name}
						value={value}
						onChange={handleChange}
						{...rest}
					></textarea>
				) : (
					<input
						type={type}
						id={name}
						name={name}
						value={value}
						onChange={handleChange}
						className={getInputClasses()}
						{...rest}
					/>
				)}
				{/* {type === 'password' && (
					<button
						className='btn  btn-outline-secondary'
						type='button'
						onClick={toggleShowPassword}
					>
						<i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
					</button>
				)} */}
				{error && <div className='invalid-feedback'>{error}</div>}
			</div>
		</div>
	)
}

export default TextField
