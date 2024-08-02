import React, { ChangeEvent } from 'react'
import { City } from '@/types/Entyties'
import styles from "./SelectField.module.scss"

interface ISelectField {
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	error: string
	options: City[]
   defaultOption: string
}

const SelectField = ({ name, value, onChange, error, options, defaultOption }: ISelectField) => {

	const getInputClasses = () => {
		return 'form-select' + (error ? ' is-invalid' : '')
	}

   const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		onChange({ name: target.name, value: target.value })
	}

	return (
		<div>
			<select
				className={styles.select}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
				// className={getInputClasses()}
			>
				<option
					disabled
					value=''
				>
					{defaultOption}
				</option>
				{options.length > 0 &&
					options.map((option) => (
						<option
							value={option.name}
							key={option.name}
						>
							{option.name}
						</option>
					))}
			</select>
			{error && <div>{error}</div>}
		</div>
	)
}

export default SelectField
