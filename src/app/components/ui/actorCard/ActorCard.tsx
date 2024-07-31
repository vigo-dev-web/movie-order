import Image from 'next/image'
import styles from './ActorCard.module.scss'
import { Actor } from "@/types/Entyties"

const ActorCard = () => {
	return (
		<div className={styles.actorCard}>
			<Image
				className={styles.mainFrame}
				src='/actor-1.jpg'
				fill={true}
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
