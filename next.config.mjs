import WithMDX from '@next/mdx'

const withMDX = WithMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	experimental: {
		// mdxRs: true,
	},
}

export default withMDX(nextConfig)
