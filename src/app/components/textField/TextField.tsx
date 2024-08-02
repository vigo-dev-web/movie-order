import React, { ChangeEvent } from 'react'
import styles from "./TexrField.module.scss"

interface ITextdField {
	label: string
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	type: string
	error?: string
}

const TextField = ({ label, name, value, onChange, type, error, ...rest }: ITextdField) => {
	const getInputClasses = () => {
		return 'form-control' + (error ? ' is-invalid' : '')
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onChange({ name: e.target.name, value: e.target.value })
	}

	return (
		<>
			<div>
				{/* <label htmlFor={name}>{label}</label> */}
				{name === 'message' ? (
					<textarea
						className={styles.textArea}
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
						placeholder={label}
						value={value}
							onChange={handleChange}
						className={styles.input}
						// className={getInputClasses()}
						{...rest}
					/>
				)}
				{error && <div>{error}</div>}
			</div>
		</>
	)
}

export default TextField
