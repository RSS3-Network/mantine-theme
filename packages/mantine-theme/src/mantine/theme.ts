import { DEFAULT_THEME, type MantineTheme, createTheme } from '@mantine/core'
import { deepmerge } from '../utils/deepmerge'
import { colors } from './colors'
// @ts-ignore
import appShellClasses from './components/app-shell.module.css'
// @ts-ignore
import buttonClasses from './components/button.module.css'
// @ts-ignore
import tooltipClasses from './components/tooltip.module.css'

const themeOverride = createTheme({
	colors,
	components: {
		AppShell: {
			classNames: appShellClasses,
		},
		Button: {
			classNames: buttonClasses,
		},
		Modal: {
			defaultProps: {
				centered: true,
				overlayProps: {
					backgroundOpacity: 0.3,
					blur: 1,
				},
			},
		},
		Tooltip: {
			classNames: tooltipClasses,
		},
		TooltipFloating: tooltipClasses,
	},
	primaryColor: 'blue',
})

export const theme = deepmerge(DEFAULT_THEME, themeOverride) as MantineTheme
