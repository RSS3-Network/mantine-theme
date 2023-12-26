import { DEFAULT_THEME, type MantineTheme, createTheme } from '@mantine/core'
import { deepmerge } from '../utils/deepmerge'
// @ts-ignore
import appShellClasses from './components/app-shell.module.css'
// @ts-ignore
import buttonClasses from './components/button.module.css'
// @ts-ignore
import tooltipClasses from './components/tooltip.module.css'

const themeOverride = createTheme({
	colors: {
		blue: [
			'#e5f4ff',
			'#cde4ff',
			'#9cc6fe',
			'#67a7fc',
			'#3c8cfb',
			'#217cfa',
			'#0d73fb',
			'#0062e0',
			'#0057c9',
			'#004bb2',
		],
	},
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
