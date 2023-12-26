'use client'

import { useComputedColorScheme } from '@mantine/core'
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { type HighlighterGeneric, addClassToHast } from 'shikiji'
import classes from './shiki.module.css'
import { dark, light } from './themes'
import type { ShikiLanguage } from './types'

type HighlightCode = (
	code: string,
	language: ShikiLanguage,
	highlightLines?: number[],
) => { code: string; highlighted: boolean }

function prepareHtmlCode(code: string) {
	return code
		.replaceAll('tabindex="0"', '')
		.replace('<code>', `<code class="${classes.code}">`)
		.replaceAll('class="shiki "', `class="${classes.pre}"`)
		.replaceAll('style="background-color:#EBEEF5;color:#25262B"', '')
		.replaceAll('style="background-color:#282c34;color:#9DA5B3"', '')
}

const ShikiContext = createContext<HighlightCode | null>(null)

interface ShikiProviderProps {
	children: React.ReactNode
	loadShiki: () => Promise<HighlighterGeneric<any, any>>
}

export function ShikiProvider({ children, loadShiki }: ShikiProviderProps) {
	const [shiki, setShiki] = useState<HighlighterGeneric<any, any> | null>(null)
	const computedColorScheme = useComputedColorScheme('light')

	useEffect(() => {
		loadShiki().then((s) => setShiki(s))
	}, [loadShiki])

	const highlight: HighlightCode = useCallback(
		(code: string, language = 'tsx', highlightLines: number[] = []) => {
			if (!shiki) {
				return { code, highlighted: false }
			}

			return {
				code: prepareHtmlCode(
					shiki.codeToHtml(code, {
						lang: language,
						theme: computedColorScheme === 'light' ? light : dark,
						transformers: highlightLines.map((l) => ({
							name: 'mantine-code-highlight:line-class',
							line(node, line) {
								if (highlightLines.includes(line))
									addClassToHast(node, 'highlighted')
								return node
							},
						})),
					}),
				),
				highlighted: true,
			}
		},
		[shiki, computedColorScheme],
	)

	return (
		<ShikiContext.Provider value={highlight}>{children}</ShikiContext.Provider>
	)
}

export function useShiki() {
	const shiki = useContext(ShikiContext)

	if (!shiki) {
		return (code: string) => ({ code, highlighted: false })
	}

	return shiki
}
