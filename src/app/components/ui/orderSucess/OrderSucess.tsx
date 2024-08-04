import styles from "./OrderSucess.module.scss"
import ButtonLink from '../buttonLink/ButtonLink'

const OrderSucess = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Заявка отправлена!</h3>
			<p className={styles.text}>
				Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.
			</p>
			<ButtonLink link='/'>Вернуться на главную</ButtonLink>
		</div>
	)
}

export default OrderSucess
