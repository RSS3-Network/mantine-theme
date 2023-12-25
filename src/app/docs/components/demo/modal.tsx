'use client'

import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function ModalDemo() {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Modal opened={opened} onClose={close} title="Title">
				Content of Modal
			</Modal>

			<Button onClick={open}>Open modal</Button>
		</>
	)
}
