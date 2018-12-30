import { Card } from 'ui'
import styled from 'styled-components'

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 1;
	background: rgba(0,0,0,0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`

export const BaseModal = styled(Card)`
	width: 600px;
	@media (max-width: 700px) {
		width: 100%;
		margin: 0 24px;
	}
`
