'use client'

import { ShikiProvider } from '@/components/shiki/provider'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { theme } from '@rss3/mantine-theme'
import { Poppins } from 'next/font/google'

export const font = Poppins({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-poppins',
})

theme.fontFamily = font.style.fontFamily

async function loadShiki() {
	const { getHighlighter } = await import('shikiji')
	const shiki = await getHighlighter({
		langs: ['tsx', 'scss', 'html', 'bash', 'json'],
	})

	return shiki
}

export function Providers({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<ColorSchemeScript />
			<MantineProvider theme={theme}>
				{/* @ts-ignore */}
				<ShikiProvider loadShiki={loadShiki}>{children}</ShikiProvider>
			</MantineProvider>
		</>
	)
}
