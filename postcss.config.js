module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		'postcss-preset-mantine': {},
		'postcss-simple-vars': {
			variables: {
				'mantine-breakpoint-xs': '36em',
				'mantine-breakpoint-sm': '40em',
				'mantine-breakpoint-md': '48em',
				'mantine-breakpoint-lg': '64em',
				'mantine-breakpoint-xl': '80em',
				'mantine-breakpoint-2xl': '96em',
				'docs-navbar-breakpoint': '47.5em',
				'docs-mdx-breakpoint': '67.5em',
			},
		},
	},
}
