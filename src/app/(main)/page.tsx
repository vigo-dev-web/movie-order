'use client'

import Poster from '../components/poster/Poster'
import Actors from '../components/actors/Actors'
import MovieFrame from '../components/movieFrame/MovieFrame'
import styles from './page.module.scss'
import YandexMap from '../components/map/YandexMap'
import Modal from '../components/ui/modal/Modal'

const Home = () => {

	return (
		<main className={styles.main}>
			<Poster />
			<Actors />
			<MovieFrame />
			<YandexMap />
			<Modal />
		</main>
	)
}

export default Home
