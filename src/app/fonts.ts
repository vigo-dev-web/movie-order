import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

export const myFont = localFont({
	src: '../../public/fonts/futura_pt_book.woff2',
	display: 'swap',
	weight: '400'
})

export const secondFont = Roboto({
	weight: '400',
	subsets: ['latin', 'cyrillic']
})
