import { Button, Card, Container, Input } from 'ui'

import { Provider } from 'mobx-react'
import React from 'react'
import { UserInputModal } from 'user'
import { store } from './store'

export const CountDownPage = () => (
	<Provider {...store.stores}>
		<Container>
			<UserInputModal />
			<div>Init</div>
			<Card>
				<h1>hhhh</h1>
				<Input placeholder="AAA" />
				<Button>saddsadsa</Button>
			</Card>
		</Container>
	</Provider>
)
