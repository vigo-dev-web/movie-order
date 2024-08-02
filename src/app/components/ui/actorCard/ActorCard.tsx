import Image from 'next/image'
import styles from './ActorCard.module.scss'
import { Actor } from "@/types/Entyties"

const ActorCard = ({name, desc, role, img}:Actor) => {
	return (
		<div className={styles.actorCard}>
			<Image
				className={styles.mainFrame}
				src={img}
				fill={true}
				alt={name}
			/>
			<div className={styles.actorPersonalHover}>
				<p className={styles.actorRole}>{role}</p>
				<p>{name}</p>
			</div>
			<p className={styles.actorDesc}>
				{desc}
			</p>
		</div>
	)
}

export default ActorCard
