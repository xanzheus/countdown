import styled, { css } from 'styled-components'

import React from 'react'

export const Row = styled(({ isCenter, ...rest }) => <div {...rest} />)`
	display: flex;
	${({ isCenter }) => isCenter && css`justify-content: center;`};
`
