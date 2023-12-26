'use client'

import { TextInput } from '@mantine/core'
import { useState } from 'react'
import classes from './css-modules-demo.module.css'

export function CssModulesDemo() {
	const [value, setValue] = useState('')
	const [focused, setFocused] = useState(false)
	const floating = focused || value.length > 0 || undefined

	return (
		<TextInput
			label="Floating label input"
			labelProps={{ 'data-floating': floating }}
			classNames={{
				root: classes.root,
				input: classes.input,
				label: classes.label,
			}}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
			value={value}
			onChange={(event) => setValue(event.currentTarget.value)}
		/>
	)
}
