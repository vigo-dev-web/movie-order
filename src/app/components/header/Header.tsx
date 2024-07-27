import ButtonLink from '../ui/buttonLink/ButtonLink'
import Logo from '../ui/logo/Logo'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
         <div className={styles.container}>
				<Logo />
				<ButtonLink opacity={true} link={'/movie-oreder'}>{'Подключить подписку'}</ButtonLink>
			</div>
		</header>
	)
}

export default Header
