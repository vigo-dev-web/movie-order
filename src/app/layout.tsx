import type { Metadata } from 'next'
import './globals.scss'
import localFont from 'next/font/local'
import { ModalWrapper } from './modalContext'

const myFont = localFont({
	src: '../../public/fonts/futura_pt_book.woff2',
	display: 'swap',
	weight: '400'
})

export const metadata: Metadata = {
	title: 'Сериал | Ведьмак',
	description: "Сериал 'Ведьмак' - смотреть онлайн"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ModalWrapper>
			<html lang='ru'>
				<body className={myFont.className}>{children}</body>
			</html>
		</ModalWrapper>
	)
}
