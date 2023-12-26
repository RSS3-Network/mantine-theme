import WithMDX from '@next/mdx'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'

const withMDX = WithMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [[rehypeMdxCodeProps]],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	experimental: {
		// mdxRs: true,
	},
	transpilePackages: ['@rss3/mantine-theme'],
}

export default withMDX(nextConfig)
