import React, { ChangeEvent, ReactNode } from 'react'

interface ICheckBoxField {
	name: string
	value: boolean | undefined
	onChange: (target: ChangeEvent<HTMLInputElement>) => void
	children: ReactNode
	error?: string
}

const CheckBoxField = ({ name, value, onChange, children, error }: ICheckBoxField) => {
	const handleChange = () => {
		onChange({ name: name, value: !value })
	}

	const getInputClasses = () => {
		return 'form-check-input' + (error ? ' is-invalid' : '')
	}
	return (
		<div>
			<input
				className={getInputClasses()}
				type='checkbox'
				value=''
				id={name}
				onChange={handleChange}
				checked={value}
			/>
			<label
				htmlFor={name}
			>
				{children}
			</label>
			{error && <div>{error}</div>}
		</div>
	)
}

export default CheckBoxField
