'use client'

import { Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function BurgerDemo() {
	const [opened, { toggle }] = useDisclosure()
	return (
		<Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
	)
}
