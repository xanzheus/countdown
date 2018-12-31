import { Button, Card, Input, Row } from 'ui'
import { inject, observer } from 'mobx-react'

import { Area } from './styled'
import React from 'react'
import { compose } from 'recompose'

export const ChatArea = compose(
	inject(({ user, userInput }) => ({
		user,
		open: () => userInput.open(),
	})),
	observer,
)(
	({ user: { color, isInit }, open }) => (
		<Card>
			{isInit ? (
				<Area>
					<Row>
						<Input placeholder="Say something fun... and enter!" color={color} />
					</Row>
				</Area>
			) : (
				<Area>
					<Row isCenter>
						<Button onClick={open}>Let's Chat!</Button>
					</Row>
				</Area>
			)}
		</Card>
	)
)