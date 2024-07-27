import Link from 'next/link'
import Logo from '../ui/logo/Logo'
import Social from '../ui/social/Social'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Logo />
				<Link href={''} className={styles.policy}>
					Политика обработки персональных данных
				</Link>
				<Social />
			</div>
		</footer>
	)
}

export default Footer
