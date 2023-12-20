'use client'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { ShikiProvider } from '@mantinex/shiki'
import { theme } from '@rss3/mantine-theme/index'

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
