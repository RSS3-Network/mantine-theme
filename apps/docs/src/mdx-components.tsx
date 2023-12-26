import type { MDXComponents } from 'mdx/types'
import { MdxPre } from './components/mdx-pre'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		pre: MdxPre,
		h1: (props) => (
			<h1
				data-order="1"
				data-heading={props.children}
				id={props.children?.toString()}
				{...props}
			/>
		),
		h2: (props) => (
			<h2
				data-order="2"
				data-heading={props.children}
				id={props.children?.toString()}
				{...props}
			/>
		),
		h3: (props) => (
			<h3
				data-order="3"
				data-heading={props.children}
				id={props.children?.toString()}
				{...props}
			/>
		),
		h4: (props) => (
			<h4
				data-order="4"
				data-heading={props.children}
				id={props.children?.toString()}
				{...props}
			/>
		),
		h5: (props) => (
			<h5
				data-order="5"
				data-heading={props.children}
				id={props.children?.toString()}
				{...props}
			/>
		),
		h6: (props) => (
			<h6
				data-order="6"
				data-heading={props.children}
				id={props.children?.toString()}
				{...props}
			/>
		),
		...components,
	}
}
