import {
	Badge,
	Button,
	Card,
	CardSection,
	Group,
	Image,
	Text,
} from '@mantine/core'

export function CardDemo() {
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder maw="350">
			<CardSection my="0">
				<Image
					my="0"
					src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
					height={160}
					alt="Norway"
				/>
			</CardSection>

			<Group justify="space-between" mt="md" mb="xs">
				<Text fw={500} my="0">
					Norway Fjord Adventures
				</Text>
				<Badge color="pink">On Sale</Badge>
			</Group>

			<Text size="sm" c="dimmed" my="0">
				With Fjord Tours you can explore more of the magical fjord landscapes
				with tours and activities on and around the fjords of Norway
			</Text>

			<Button color="blue" fullWidth mt="md" radius="md">
				Book classic tour now
			</Button>
		</Card>
	)
}
