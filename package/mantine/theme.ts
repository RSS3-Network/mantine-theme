import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core'
import appShellClasses from './components/app-shell.module.css'
import buttonClasses from './components/button.module.css'
import tooltipClasses from './components/tooltip.module.css'
import { font } from './font'

const themeOverride = createTheme({
	fontFamily: font.style.fontFamily,
	headings: {
		fontFamily: font.style.fontFamily,
	},
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

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
