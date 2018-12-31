import styled from 'styled-components'

export const InputContainer = styled.div`
	padding: 32px;
	@media (max-width: 700px) {
		padding: 16px;
	}
	> *:not(:last-child) {
		margin-bottom: 16px;
	}
`
