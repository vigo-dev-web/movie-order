import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/'>
			<Image
				src='/logo.png'
				height={44}
				width={130}
				alt='Логотип'
			/>
		</Link>
	)
}

export default Logo
