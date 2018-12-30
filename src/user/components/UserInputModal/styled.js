import styled, { css } from 'styled-components'

import React from 'react'

export const InputContainer = styled.div`
	padding: 32px;
	@media (max-width: 700px) {
		padding: 16px;
	}
	> *:not(:last-child) {
		margin-bottom: 16px;
	}
`

export const Row = styled(({ isCenter, ...rest }) => <div {...rest} />)`
	display: flex;
	${({ isCenter }) => isCenter && css`justify-content: center;`};
`

export const Half = styled(({ isRight, ...rest }) => <div {...rest} />)`
	width: 50%;
	display: flex;
	${({ isRight }) => isRight && css`justify-content: flex-end`};
`
