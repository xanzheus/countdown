import styled, { css } from 'styled-components'

import { Modal } from 'modal'
import React from 'react'

export const Picker = styled(({ color, ...rest }) => <div {...rest} />)`
	border-radius: 100%;
	width: 50px;
	height: 50px;
	${({ color }) => css`background: ${color};`};
`

export const PickerModal = styled(Modal)`
	width: auto;
	padding: 16px;
`
