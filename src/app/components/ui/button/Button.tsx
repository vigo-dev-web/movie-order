import { ReactNode } from 'react'
import styles from './button.module.scss'

interface IButton {
	children: ReactNode | string
	opacity?: boolean
}

const Button = ({ children, opacity }: IButton) => {
	return <button className={opacity ? styles.btnReverse : styles.btn}>{children}</button>
}

export default Button
