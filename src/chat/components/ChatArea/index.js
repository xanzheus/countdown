import { Button, Card, Input, Row } from 'ui'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Area } from './styled'
import { ChatBox } from 'chat'
import { compose } from 'recompose'
import { firestore } from 'firebase-mgmt'

export const ChatArea = compose(
	inject(({ user, userInput }) => ({
		user,
		open: () => userInput.open(),
	})),
	observer,
)(
	class extends Component {
		state = {
			msg: '',
		}

		onType = ({ target: { value }}) => {
			this.setState({ msg: value })
		}

		onEnter = ({ keyCode }) => {
			if (keyCode === 13) {
				const { msg } = this.state
				const { user } = this.props
				firestore.collection('msg').add({
					msg,
					user: user.getInfo(),
					date: new Date().getTime()
				})
				this.setState({ msg: '' })
			}
		}

		render() {
			const { user: { color, isInit }, open }  = this.props
			const { msg } = this.state
			return (
				<Card>
					{isInit ? (
						<Area>
							<Row>
								<ChatBox />
							</Row>
							<Row>
								<Input
									placeholder="Say something fun... and enter!"
									color={color}
									onChange={this.onType}
									onKeyDown={this.onEnter}
									value={msg}
								/>
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
		}
	}
)