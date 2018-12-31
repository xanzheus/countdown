import { createGlobalStyle } from 'styled-components'

export const Base = createGlobalStyle`
	body {
		font-family: 'Sarabun', sans-serif;
		background: #37474F;
		font-size: 18px;
	}
	input, button {
		font-family: 'Sarabun', sans-serif;
		font-size: 18px;
	}
	@font-face {
		font-family: 'Digital-7';
		src: url(${
			require('./digital-7.ttf')
		});
	}

` 
