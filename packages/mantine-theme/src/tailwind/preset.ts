import tailwindPresetMantine from 'tailwind-preset-mantine'
import { colors } from '../mantine/colors'

const config: Record<string, unknown> = tailwindPresetMantine({
	mantineColors: colors,
})

export default config
