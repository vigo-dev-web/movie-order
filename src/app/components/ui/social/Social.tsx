import Image from 'next/image'
import Link from 'next/link'
import styles from './Social.module.scss'
import { social } from '@/data/social'

const Social = () => {
	return (
		<ul className={styles.wrapper}>
			{social.map((socialItem) => (
				<li key={socialItem.id}>
					<Link href={socialItem.link}>
						<Image
							className={styles.img}
							src={socialItem.img}
							height={32}
							width={32}
							alt={socialItem.alt}
						/>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Social
