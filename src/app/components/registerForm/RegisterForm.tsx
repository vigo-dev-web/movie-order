'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { validator } from '@/utils/validator'
import { ErrorData, InputData } from '@/types/Entyties'
import { cities } from '@/data/cities'
import styles from './RegisterForm.module.scss'
import SelectField from '../selectField/SelectField'
import TextField from '../textField/TextField'
import FileField from '../fileField/FileField'
import CheckBoxField from '../checkBoxField/CheckBoxField'
import { validatorConfig } from '@/data/validatorConfig'
import OrderSucess from '../ui/orderSucess/OrderSucess'
import Button from '../ui/button/Button'
// import { useDispatch } from 'react-redux'
// import { userAdded } from '@/app/lib/features/users/usersSlice'

const RegisterForm = () => {

	const [data, setData] = useState<InputData>({
		city: '',
		name: '',
		email: '',
		phone: '',
		message: '',
		privacy: false
	})

	const [errors, setErrors] = useState<ErrorData>({} as ErrorData)
	const [isSuccess, setIsSucess] = useState(false)
	// const dispatch = useDispatch()

	useEffect(() => {
		validate()
	}, [data])

	const handleChange = (target: any) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }))
	}
	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors as ErrorData)
		return Object.keys(errors).length === 0
	}

	const getCityById = (id: string) => {
		for (const city of cities) {
			if (city.name === id) {
				return { id: city.name, name: city.name }
			}
		}
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
		setIsSucess(true)
		const { city } = data
		let user = {...data, city: getCityById(city)}
		// dispatch(userAdded(user))
	}

	return (
		<div className={styles.container}>
			{isSuccess ? (
				<OrderSucess />
			) : (
				<>
					<h3 className={styles.title}>Оставьте заявку</h3>
					<form onSubmit={handleSubmit}>
						<div className={styles.field}>
							<SelectField
								name='city'
								options={cities}
								defaultOption='Выберете город'
								onChange={handleChange}
								value={data.city}
								error={errors.city}
							/>
						</div>
						<div className={styles.field}>
							<TextField
								label='Имя'
								type='text'
								name='name'
								value={data.name}
								error={errors.name}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.connectFields}>
							<TextField
								label='Email'
								type='text'
								name='email'
								value={data.email}
								error={errors.email}
								onChange={handleChange}
							/>
							<TextField
								label='+7(___) __-__-___'
								type='text'
								name='phone'
								value={data.phone}
								error={errors.phone}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.field}>
							<TextField
								label='Оставьте пометку к заказу'
								type='text'
								name='message'
								value={data.message}
								error={errors.message}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.field}>
							<FileField />
						</div>

						<CheckBoxField
							value={data.privacy}
							onChange={handleChange}
							name='privacy'
							error={errors.privacy}
						>
							Даю согласие на обработку своих персональных данных
						</CheckBoxField>
						<div className={styles.buttonWrapper}>
							<Button>{'Оставить заявку'}</Button>
						</div>
					</form>
				</>
			)}
		</div>
	)
}

export default RegisterForm
