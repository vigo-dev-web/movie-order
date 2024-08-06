import React, { ChangeEvent, ReactNode } from 'react'
import styles from './CheckBoxField.module.scss'
import { secondFont } from '@/app/fonts'

interface ICheckBoxField {
	name: string
	value: boolean | undefined
	onChange: (e: any) => void
	children: ReactNode
	error?: string
}

const CheckBoxField = ({ name, value, onChange, children, error }: ICheckBoxField) => {
	const handleChange = () => {
		onChange({ name: name, value: !value })
	}

	return (
		<div className={styles.container}>
			<input
				className={styles.checkbox}
				type='checkbox'
				value=''
				id={name}
				onChange={handleChange}
				checked={value}
			/>
			<label
				htmlFor={name}
				className={value ? styles.labelChecked : styles.labelEmpty}
			>
				{children}
			</label>
			{error ? (
				<p className={`${styles.errorField} ${secondFont.className}`}>{error}</p>
			) : (
				<p className={styles.emptyField}>{'Поле'}</p>
			)}
		</div>
	)
}

export default CheckBoxField
