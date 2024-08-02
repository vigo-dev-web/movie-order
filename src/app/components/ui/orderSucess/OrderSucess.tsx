import ButtonLink from '../buttonLink/ButtonLink'

const OrderSucess = () => {
	return (
		<div>
			<h3>Заявка отправлена!</h3>
			<p>
				Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.
			</p>
			<ButtonLink link='/'>Вернуться на главную</ButtonLink>
		</div>
	)
}

export default OrderSucess
