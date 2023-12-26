'use client'

import { Button, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function DrawerDemo() {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Drawer opened={opened} onClose={close} title="Authentication">
				Content of Drawer
			</Drawer>

			<Button onClick={open}>Open Drawer</Button>
		</>
	)
}
