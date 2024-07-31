import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div className={styles.container}>
			<Link href='/'>
				<Image
					src='/logo.png'
					// height={44}
					// width={130}
					fill={true}
					alt='Логотип'
				/>
			</Link>
		</div>
	)
}

export default Logo
