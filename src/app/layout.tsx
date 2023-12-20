import '@/css/globals.css'

import { Providers } from '@/components/providers'
import { Shell } from '@/components/shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Shell>{children}</Shell>
				</Providers>
			</body>
		</html>
	)
}
