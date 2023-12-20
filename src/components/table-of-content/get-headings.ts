export interface Heading {
	depth: number
	content: string
	id: string
	getNode: () => HTMLHeadingElement
}

function getHeadingsData(headings: HTMLHeadingElement[]): Heading[] {
	const result: Heading[] = []

	for (let i = 0; i < headings.length; i += 1) {
		const heading = headings[i]
		const order = heading.getAttribute('data-order')
		if (heading.id && order) {
			result.push({
				depth: parseInt(order, 10),
				content: heading.getAttribute('data-heading') || '',
				id: heading.id,
				getNode: () =>
					document.getElementById(heading.id) as HTMLHeadingElement,
			})
		}
	}

	return result
}

export function getHeadings(): Heading[] {
	const root = document.getElementById('mdx')

	if (!root) {
		return []
	}

	return getHeadingsData(Array.from(root.querySelectorAll('[data-heading]')))
}
