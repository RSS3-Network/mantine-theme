import WithMDX from '@next/mdx'
import WithTm from 'next-transpile-modules'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'

const withMDX = WithMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [[rehypeMdxCodeProps]],
	},
})

const withTM = WithTm({
	transpileModules: ['@rss3/mantine-theme'],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	experimental: {
		// mdxRs: true,
	},
}

export default withTM(withMDX(nextConfig))
