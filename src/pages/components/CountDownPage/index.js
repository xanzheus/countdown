import { Button, Card, Container, Input } from 'ui'

import { Modal } from 'modal'
import { Provider } from 'mobx-react'
import React from 'react'
import { store } from './store'

export const CountDownPage = () => (
	<Provider {...store.stores}>
		<Container>
			<div>Init</div>
			<Card>
				<h1>hhhh</h1>
				<Input placeholder="AAA" />
				<Button>saddsadsa</Button>
			</Card>
			<Modal name="sampleModal" />
		</Container>
	</Provider>
)
