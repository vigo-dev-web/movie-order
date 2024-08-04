import React from 'react'
import RegisterForm from '@/app/components/registerForm/RegisterForm'
import ContactInfo from '@/app/components/ui/contactInfo/ContactInfo'
import styles from "./page.module.scss"

const MovieOrder = () => {
	return (
		<main className={styles.container}>
			<RegisterForm />
			<ContactInfo />
		</main>
	)
}

export default MovieOrder
