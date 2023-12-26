import '@/css/globals.css'

import type { Metadata } from 'next'
import { Providers } from '../components/providers'
import { Shell } from '../components/shell'

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
