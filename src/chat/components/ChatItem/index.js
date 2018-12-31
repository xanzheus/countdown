import { Container, InfoWrapper, Msg, Name, Profile } from './styled'

import React from 'react'
import { Row } from 'ui'

export const ChatItem = ({ msg, user }) => (
	<Row>
		<Container isUser={user.isUser(msg.user)}>
			<Profile src={msg.user.pic} color={msg.user.color} isUser={user.isUser(msg.user)} />
			<InfoWrapper>
				<Name color={msg.user.color}>{msg.user.name}</Name>
				<Msg color={msg.user.color}>{msg.msg}</Msg>
			</InfoWrapper>
		</Container>
	</Row>
)
