import Deepmerge from '@fastify/deepmerge'

export const deepmerge = Deepmerge({
	mergeArray: function replaceByClonedSource(options) {
		const clone = options.clone
		return (target, source) => clone(source)
	},
	// biome-ignore lint/suspicious/noExplicitAny: to workaround a type bug
}) as any
