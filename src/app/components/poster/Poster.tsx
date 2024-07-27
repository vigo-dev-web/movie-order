import ButtonLink from '../ui/buttonLink/ButtonLink'
import styles from './Poster.module.scss'

const Poster = () => {
	return (
		<section className={styles.poster}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>Сериал Ведьмак</h1>
					<p className={styles.text}>
						Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в
						неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
					</p>
					<ButtonLink link={'/movie-order'}>Смотреть сериал</ButtonLink>
				</div>
			</div>
		</section>
	)
}

export default Poster
