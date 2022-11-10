import {createGlobalStyle} from 'styled-components';
import {MyTheme} from "./MultiThemeProvider";

export const GlobalStyle = createGlobalStyle<{ theme: MyTheme }>`
	body {
		margin: 0;
		padding: 20px;
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.color};
	}
`
