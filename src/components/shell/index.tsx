'use client'

import { Anchor, AppShell, Burger, Group, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogo } from '@rss3/mantine-theme/icons'
import Link from 'next/link'
import { ColorSchemeSwitch } from '../color-scheme-switch'
import { Nav } from './nav'

interface ShellProps {
	children: React.ReactNode
}

export function Shell({ children }: ShellProps) {
	const [opened, { toggle }] = useDisclosure()

	return (
		<AppShell
			header={{ height: 60 }}
			footer={{ height: 30 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			aside={{
				width: 300,
				breakpoint: 'md',
				collapsed: { desktop: false, mobile: true },
			}}
			padding="md"
		>
			<AppShell.Header withBorder={false} px="md">
				<Group justify="space-between" h="100%">
					<Group>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Link
							href="/"
							className="hover:opacity-80 transition-opacity duration-200"
						>
							<Group gap="5" wrap="nowrap">
								<IconLogo size={50} />
								<Text span>Theme</Text>
							</Group>
						</Link>
					</Group>
					<ColorSchemeSwitch />
				</Group>
			</AppShell.Header>

			<AppShell.Navbar py="md" withBorder={false}>
				<Nav />
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>

			<AppShell.Footer withBorder={false} px="md">
				<Group justify="space-between" align="center" h="100%">
					<Anchor
						href="https://mantine-theme.rss3.dev"
						target="_blank"
						c="dimmed"
						fz="sm"
					>
						mantine-theme.rss3.dev
					</Anchor>

					<Text c="dimmed" fz="sm">
						Built by{' '}
						<Anchor
							href="https://github.com/RSS3-Network"
							target="_blank"
							c="dimmed"
							fz="sm"
							underline="always"
						>
							RSS3 Network
						</Anchor>
					</Text>
				</Group>
			</AppShell.Footer>
		</AppShell>
	)
}
