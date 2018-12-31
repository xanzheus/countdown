import { Button, Card, Container, Input } from 'ui'
import Clock from '../Clock'
import { ChatArea } from 'chat'
import { Container } from 'ui'

import { Provider } from 'mobx-react'
import React from 'react'
import { UserInputModal } from 'user'
import { store } from './store'

export const CountDownPage = () => (
	<Provider {...store.stores}>
		<Container>
			<UserInputModal />
			<Clock />
			<Card>
				<h1>hhhh</h1>
				<Input placeholder="AAA" />
				<Button>saddsadsa</Button>
			</Card>
			<ChatArea />
		</Container>
	</Provider>
)
