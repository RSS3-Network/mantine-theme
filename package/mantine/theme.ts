'use client'

import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core'
import { font, fontMonospace } from './font'

const themeOverride = createTheme({
	fontFamily: font.style.fontFamily,
	headings: {
		fontFamily: font.style.fontFamily,
	},
	fontFamilyMonospace: fontMonospace.style.fontFamily,
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
		Button: {
			defaultProps: {
				ff: 'monospace',
				tt: 'uppercase',
			},
		},
		Modal: {
			defaultProps: {
				overlayProps: {
					backgroundOpacity: 0.3,
					blur: 1,
				},
			},
		},
		Tooltip: {
			styles: {
				tooltip: {
					background: 'var(--mantine-color-default)',
					boxShadow: 'var(--mantine-shadow-sm)',
					color: 'var(--mantine-color-text)',
				},
			},
		},
		TooltipFloating: {
			styles: {
				tooltip: {
					background: 'var(--mantine-color-default)',
					boxShadow: 'var(--mantine-shadow-sm)',
					color: 'var(--mantine-color-text)',
				},
			},
		},
	},
	primaryColor: 'blue',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
