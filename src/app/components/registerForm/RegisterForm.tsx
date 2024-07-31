'use client'

import React, { useState, useEffect, ChangeEvent } from 'react'
import { validator } from '@/utils/validator'
import SelectField from '../selectField/SelectField'
import TextField from '../textField/TextField'
import CheckBoxField from '../checkBoxField/CheckBoxField'

const RegisterForm = () => {

   type InputData = {
      city: string,
      name: string,
		email: string,
		phone: string,
		message: string,
		privacy: boolean

   }

	const [data, setData] = useState<InputData>({
		city: '',
		name: '',
		email: '',
		phone: '',
		message: '',
		privacy: true
   })

	const [errors, setErrors] = useState({})
	const [cities, setCities] = useState<any>([])
   const handleChange = ( target : ChangeEvent<HTMLInputElement>) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }))
	}
   console.log(data)
	const validatorConfig = {
		city: {
			isRequired: {
				message: 'Город не выбран'
			}
		},
		name: {
			isRequired: {
				message: 'Поле не заполнено'
			}
		},
		email: {
			isRequired: {
				message: 'Поле не заполнено'
			}
		},
		phone: {
			isRequired: {
				message: 'Поле не заполнено'
			}
		},
		message: {
			isRequired: {
				message: 'Поле не заполнено'
			}
		},
		privacy: {
			isRequired: {
				message: 'Поле не заполнено'
			}
		}
	}
	useEffect(() => {
		validate()
	}, [data])

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}
	const isValid = Object.keys(errors).length === 0

	const getProfessionById = (id: string) => {
		for (const city of cities) {
			if (city.value === id) {
				return { _id: city.value, name: city.label }
			}
		}
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
		const { city } = data
		console.log({ ...data, city: getProfessionById(city) })
	}

	return (
      <form onSubmit={handleSubmit}>
			<SelectField
            label='Выберете город'
            name='city'
            options={cities}
            defaultOption='Список городов'
            onChange={handleChange}
            value={data.city}
            // error={errors.city}
			/>
			<TextField
				label='Имя'
				type='text'
				name='name'
				value={data.name}
				// error={errors.name}
				onChange={handleChange}
			/>
			<TextField
				label='Email'
				type='text'
				name='email'
				value={data.email}
				// error={errors.email}
				onChange={handleChange}
			/>
			<TextField
				label='Телефон'
				type='text'
				name='phone'
				value={data.phone}
				// error={errors.phone}
				onChange={handleChange}
			/>
			<TextField
				label='Оставьте пометку к заказу'
				type='text'
				name='message'
				value={data.message}
				// error={errors.message}
				onChange={handleChange}
			/>
			<input
				type='file'
				name='file'
				id='file'
         />
			<CheckBoxField
				value={data.privacy}
				onChange={handleChange}
				name='privacy'
				// error={errors.privacy}
			>
				Подтвердить <a>лицензионное соглашение</a>
			</CheckBoxField>
			<button
				type='submit'
				disabled={!isValid}
				className='btn btn-primary w-100 mx-auto'
			>
				Оставить заявку
			</button>
		</form>
	)
}

export default RegisterForm
