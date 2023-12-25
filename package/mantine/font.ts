import { Poppins } from 'next/font/google'

export const font = Poppins({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-poppins',
})

export const fontClassNames = `${font.variable}`
