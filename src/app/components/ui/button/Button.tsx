import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface IButton {
	children: ReactNode | string
	opacity?: boolean
	onClick?: () => void
}

const Button = ({ children, opacity, onClick}: IButton) => {
	return <button className={opacity ? styles.btnReverse : styles.btn} onClick={onClick}>{children}</button>
}

export default Button
