import React, { ChangeEvent } from 'react'
import styles from './TextField.module.scss'
import { myFont, secondFont } from '@/app/fonts'

interface ITextdField {
	label: string
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	type: string
	error?: string
}

const TextField = ({ label, name, value, onChange, type, error, ...rest }: ITextdField) => {

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onChange({ name: e.target.name, value: e.target.value })
	}

	return (
		<>
			<div className={styles.inputWrapper}>
				{name === 'message' ? (
					<textarea
						style={{ resize: 'none' }}
						className={error ? `${styles.textAreaError} ${myFont.className}` : `${styles.textArea} ${myFont.className}`}
						id={name}
						name={name}
						value={value}
						onChange={handleChange}
						placeholder={label}
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
						className={error ? `${styles.inputError} ${myFont.className}` : `${styles.input} ${myFont.className}`}
						{...rest}
					/>
				)}
				{error ? (
					<p className={`${styles.errorField} ${secondFont.className}`}>{error}</p>
				) : (
					<p className={styles.emptyField}>{'Поле не заполнено'}</p>
				)}
			</div>
		</>
	)
}

export default TextField
