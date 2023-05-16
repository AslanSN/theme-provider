import React, { createContext, useContext, useMemo } from 'react'
import merge from 'lodash.merge'
import { css } from '@emotion/react'

const ThemeTokens = {
	background: 'var(--primary-color)',
	color: 'white',
	borderRadius: '1rem',
	height: '2rem',
}

export const Theme = createContext(ThemeTokens)

interface ThemeProviderProps {
	overrides?: object
}

const ThemeProvider = ({
	children,
	overrides,
}: React.PropsWithChildren<ThemeProviderProps>) => {
	css()
	const theme = useContext(Theme)

	if (overrides) {
		const thisTheme = useMemo(() => merge(theme, overrides), [theme, overrides])

		return (
			<Theme.Provider value={thisTheme}>
				<div>{children}</div>
			</Theme.Provider>
		)
	}
	return (
		<Theme.Provider value={theme}>
			<div>{children}</div>
		</Theme.Provider>
	)
}

export default ThemeProvider
