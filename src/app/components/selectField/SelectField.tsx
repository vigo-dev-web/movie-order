import React, { ChangeEvent } from 'react'
import { City } from '@/types/Entyties'
import styles from "./SelectField.module.scss"
import { myFont, secondFont } from '@/app/fonts'

interface ISelectField {
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	error: string
	options: City[]
   defaultOption: string
}

const SelectField = ({ name, value, onChange, error, options, defaultOption }: ISelectField) => {

   const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		onChange({ name: target.name, value: target.value })
	}

	return (
		<div className={styles.dropdown}>
			<select
				className={error ? `${styles.selectError} ${myFont.className}` : `${styles.select} {${myFont.className}}`}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
			>
				<option
					disabled
					value=''
					className={styles.option}
				>
					{defaultOption}
				</option>
				{options.length > 0 &&
					options.map((option) => (
						<option
							value={option.name}
							key={option.name}
							className={styles.option}
						>
							{option.name}
						</option>
					))}
			</select>
			{error ? <p className={`${styles.errorField} ${secondFont.className}`}>{error}</p> : <p className={styles.emptyField}>{'Поле не заполнено'}</p>}
		</div>
	)
}

export default SelectField
