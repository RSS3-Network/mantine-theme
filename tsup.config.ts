import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
	entry: ['./package/index.ts'],
	outDir: 'dist',
	clean: true,
	sourcemap: true,
	treeshake: true,
	format: ['cjs', 'esm'],
	platform: 'node',
	dts: true,
	target: 'node18',
}))
