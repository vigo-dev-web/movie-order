import styles from './ContactInfo.module.scss'

const ContactInfo = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<span className={styles.title}>Наша горячая линия</span>
				<p>8 800 38 23 112</p>
			</div>
			<div className={styles.item}>
				<span className={styles.title}>Главный офис</span>
				<p className={styles.info}>г. Москва, Садовническая ул., 80</p>
			</div>
			<div className={styles.item}>
				<span className={styles.title}>Часы работы</span>
				<p className={styles.info}>Пн-Пт с 10:00 до 22:00</p>
			</div>
		</div>
	)
}

export default ContactInfo
