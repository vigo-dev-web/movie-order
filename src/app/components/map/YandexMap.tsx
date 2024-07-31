'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import styles from './YandexMap.module.scss'

const YandexMap = () => {
	return (
		<section className={styles.map}>
			<div className={styles.container}>
				<h2 className={styles.title}> Магазины мерча ведьмака</h2>
				<YMaps>
					<div className={styles.yMapContainer}>
						<Map
							defaultState={{ center: [55.75, 37.62], zoom: 12 }}
							style={{ width: '100%', height: '100%' }}
							controls={[]}
						>
							<Placemark
								geometry={[55.75, 37.545]}
								options={{
									iconLayout: 'default#image',
									iconImageHref: '/point.png',
									iconImageSize: [50, 50],
									draggable: false,
									hideIconOnBalloonOpen: false
								}}
							/>
							<Placemark
								geometry={[55.774, 37.54]}
								options={{
									iconLayout: 'default#image',
									iconImageHref: '/point.png',
									iconImageSize: [50, 50],
									draggable: false,
									hideIconOnBalloonOpen: false
								}}
							/>
							<Placemark
								geometry={[55.74, 37.62]}
								options={{
									iconLayout: 'default#image',
									iconImageHref: '/point.png',
									iconImageSize: [50, 50],
									draggable: false,
									hideIconOnBalloonOpen: false
								}}
							/>
						</Map>
					</div>
				</YMaps>
			</div>
		</section>
	)
}

export default YandexMap
