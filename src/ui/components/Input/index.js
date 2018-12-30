import styled, { css } from 'styled-components'

import React from 'react'

export const Input = styled(({ color, ...rest }) => <input {...rest} />)`
	font-size: 18px;
	outline: 0;
	border: 0;
	border-radius: 360px;
	padding: 8px 16px;
	color: white;
	width: 100%;
	&::placeholder {
		color: #F7F7F7;
	}
	${({ color }) => css`
		background: ${color};
	`}
`

Input.defaultProps = {
	color: '#CFD8DC',
}
