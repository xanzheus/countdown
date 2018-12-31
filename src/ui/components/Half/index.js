import styled, { css } from 'styled-components'

import React from 'react'

export const Half = styled(({ isRight, ...rest }) => <div {...rest} />)`
	width: 50%;
	display: flex;
	${({ isRight }) => isRight && css`justify-content: flex-end;`};
`
