'use client'
import Logo from '../ui/logo/Logo'
import Social from '../ui/social/Social'
import styles from './Footer.module.scss'
import { useModalContext } from '@/app/modalContext';

const Footer = () => {
	const { isOpen, setIsOpen } = useModalContext()

	console.log(isOpen);


	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Logo />
				<p className={styles.policy} onClick={() => setIsOpen(true)}>
					Политика обработки персональных данных
				</p>
				<Social />
			</div>
		</footer>
	)
}

export default Footer
