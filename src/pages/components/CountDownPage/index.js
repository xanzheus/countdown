import Clock, {
	Button,
	Card,
	Container,
	Input
} from 'ui'
import { ChatArea } from 'chat'

import { Provider } from 'mobx-react'
import React from 'react'
import { UserInputModal } from 'user'
import { store } from './store'

export const CountDownPage = () => (
	<Provider {...store.stores}>
		<Container>
			<UserInputModal />
			<Clock />
			<ChatArea />
		</Container>
	</Provider>
)
