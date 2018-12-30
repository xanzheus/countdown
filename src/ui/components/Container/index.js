import styled from 'styled-components'

export const Container = styled.div`
	max-width: 700px;
	margin: auto;
	@media (max-width: 700px) {
		margin: 0 32px;
	}
	@media (max-width: 580px) {
		margin: 0 16px;
	}
`