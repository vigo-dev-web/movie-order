import React from 'react'
import RegisterForm from '@/app/components/registerForm/RegisterForm'
import ContactInfo from '@/app/components/ui/contactInfo/ContactInfo'
import styles from "./page.module.scss"

const MovieOrder = () => {
	return (
		<div className={styles.container}>
			<RegisterForm />
			<ContactInfo />
		</div>
	)
}

export default MovieOrder
