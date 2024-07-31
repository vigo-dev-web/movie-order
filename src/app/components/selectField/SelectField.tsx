import React, { ChangeEvent } from 'react'

interface ISelectedField {
	label: string
	name: string
	value: string
	onChange: (target: ChangeEvent<HTMLInputElement>)  => void
	error?: string
	options: string[]
	defaultOption: string
}

const SelectField = ({ label, name, value, onChange, error, options, defaultOption }: ISelectedField) => {
	const optionsArray = !Array.isArray(options) && typeof options === 'object' ? Object.values(options) : options
	const getInputClasses = () => {
		return 'form-select' + (error ? ' is-invalid' : '')
	}

	const handleChange = ({ target }:ChangeEvent<HTMLSelectElement> ) => {
		onChange({ name: target.name, value: target.value })
	}

	return (
		<div className='mb-4'>
			<label
				htmlFor={name}
				className='form-label'
			>
				{label}
			</label>
			<select
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
				className={getInputClasses()}
			>
				<option
					disabled
					value=''
				>
					{defaultOption}
				</option>
				{optionsArray.length > 0 &&
					optionsArray.map((option:any) => (
						<option
							value={option.value}
							key={option.value}
						>
							{option.label}
						</option>
					))}
			</select>
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	)
}

export default SelectField
