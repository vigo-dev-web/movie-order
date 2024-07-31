import Image from 'next/image'
import styles from './ActorCard.module.scss'
import { Actor } from "@/types/Entyties"

const ActorCard = () => {
	return (
		<div className={styles.actorCard}>
			<Image
				className={styles.mainFrame}
				src='/actor-1.jpg'
				sizes='282px'
				width={282}
				height={400}
				style={{
					// width: '100%',
					// height: '100%',
					objectFit: 'cover'
				}}
				alt='Основной кадр'
			/>
			<div className={styles.actorPersonalHover}>
				<p className={styles.actorRole}>Ция</p>
				<p>Фрея Аннон</p>
			</div>
			<p className={styles.actorDesc}>
				Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
			</p>
		</div>
	)
}

export default ActorCard
