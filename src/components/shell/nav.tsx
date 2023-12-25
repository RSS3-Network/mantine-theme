import { NavLink } from '@mantine/core'
import { usePathname } from 'next/navigation'

type NavItem = {
	label: string
	href: string
	children?: NavItem[]
}

const nav: NavItem[] = [
	{ label: 'Getting Started', href: '/docs/getting-started' },
	{ label: 'Components', href: '/docs/components' },
	{
		label: 'Guides',
		href: '/docs/guides',
		children: [
			{ label: 'Styling Options', href: '/docs/guides/styling-options' },
			{ label: 'Layouting', href: '/docs/guides/layouting' },
			{ label: 'Fonts', href: '/docs/guides/fonts' },
			{ label: 'Icons', href: '/docs/guides/icons' },
		],
	},
]

export function Nav() {
	const pathname = usePathname()
	return (
		<>
			{nav.map((item) => (
				<NavLink
					className="font-bold"
					key={item.label}
					href={item.href}
					label={item.label}
					childrenOffset={28}
					active={pathname.startsWith(item.href)}
					defaultOpened
				>
					{item.children?.map((child) => (
						<NavLink
							key={child.label}
							href={child.href}
							label={child.label}
							childrenOffset={28}
							active={pathname.startsWith(child.href)}
						/>
					))}
				</NavLink>
			))}
		</>
	)
}
