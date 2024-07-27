import { ReactNode } from 'react'
import Link from 'next/link'
import styles from "./ButtonLink.module.scss"

interface IButtonLink {
   children: ReactNode | string,
   link: string
   opacity?: boolean,
}


const ButtonLink = ({ children, opacity, link}: IButtonLink) => {

   return <Link href={link}  className={opacity ? styles.btnReverse : styles.btn}>{children}</Link>
}

export default ButtonLink
