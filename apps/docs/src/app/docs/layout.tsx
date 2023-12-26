import { AppShellAside, TypographyStylesProvider } from '@mantine/core'
import { TableOfContents } from '../../components/table-of-content'

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<TypographyStylesProvider>
				<div id="mdx">{children}</div>
			</TypographyStylesProvider>

			<AppShellAside withBorder={false}>
				<TableOfContents withTabs={true} />
			</AppShellAside>
		</>
	)
}
