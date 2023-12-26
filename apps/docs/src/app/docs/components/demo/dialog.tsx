'use client'

import { Button, Dialog, Group, Text, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function DialogDemo() {
	const [opened, { toggle, close }] = useDisclosure(false)

	return (
		<>
			<Button onClick={toggle}>Toggle dialog</Button>

			<Dialog
				opened={opened}
				withCloseButton
				onClose={close}
				size="lg"
				radius="md"
			>
				<Text size="sm" mb="xs" fw={500}>
					Subscribe to email newsletter
				</Text>

				<Group align="flex-end">
					<TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
					<Button onClick={close}>Subscribe</Button>
				</Group>
			</Dialog>
		</>
	)
}
