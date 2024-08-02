'use client'

import ButtonLink from '../ui/buttonLink/ButtonLink'
import Logo from '../ui/logo/Logo'
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo />
				{pathname === '/movie-order' ? (
					''
				) : (
					<ButtonLink
						opacity={true}
						link={'/movie-order'}
					>
						{'Подключить подписку'}
					</ButtonLink>
				)}
			</div>
		</header>
	)
}

export default Header
