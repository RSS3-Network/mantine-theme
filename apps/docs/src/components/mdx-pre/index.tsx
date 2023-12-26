import cx from 'clsx'
import React from 'react'
import { CodeHighlight, CodeHighlightProps } from '../shiki/code-highlight'
import classes from './index.module.css'

interface PreProps {
	children?: React.ReactNode
	highlightLines?: string
	filename?: string
}

function getLanguage(children: any) {
	const matches = (children.props.className || '').match(/language-(?<lang>.*)/)
	const matchedLanguage =
		matches && matches.groups && matches.groups.lang
			? matches.groups.lang
			: 'tsx'

	if (['js', 'jsx', 'ts', 'tsx'].includes(matchedLanguage)) {
		return 'tsx'
	}

	if (['css', 'scss'].includes(matchedLanguage)) {
		return 'scss'
	}

	if (['html', 'bash', 'json'].includes(matchedLanguage)) {
		return matchedLanguage
	}

	throw new Error(`Unknown language: ${matchedLanguage}`)
}

function getCode(children: any) {
	return children.props.children
}

function getHighlightLines(highlightLines?: string) {
	if (!highlightLines) return undefined
	const match = highlightLines.match(/{([\d,-]+)}/)
	if (!match) return undefined
	const lines = match[1].split(',').flatMap((v) => {
		const num = v.split('-').map((v) => Number.parseInt(v, 10))
		if (num.length === 1) return [num[0]]
		return Array.from({ length: num[1] - num[0] + 1 }, (_, i) => i + num[0])
	})

	return lines
}

export function MdxCodeHighlight({ className, ...others }: CodeHighlightProps) {
	return <CodeHighlight className={cx(classes.code, className)} {...others} />
}

export function MdxPre({ children, highlightLines, ...rest }: PreProps) {
	return (
		<MdxCodeHighlight
			code={getCode(children)}
			language={getLanguage(children)}
			highlightLines={getHighlightLines(highlightLines)}
		/>
	)
}
