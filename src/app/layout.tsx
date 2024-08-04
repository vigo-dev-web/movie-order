import type { Metadata } from 'next'
import './globals.scss'
import { ModalWrapper } from './modalContext'
import { myFont } from '@/app/fonts'

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
