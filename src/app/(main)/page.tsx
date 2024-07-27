import Poster from '../components/poster/Poster'
import Actors from '../components/actors/Actors'
import MovieFrame from '../components/movieFrame/MovieFrame'
import Map from '../components/map/Map'
import styles from './page.module.scss'

const Home = () => {
	return (
		<main className={styles.main}>
			<Poster />
			<Actors />
			<MovieFrame />
			<Map />
		</main>
	)
}

export default Home
