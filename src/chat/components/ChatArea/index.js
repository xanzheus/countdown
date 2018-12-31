import { Button, Card, Input, Row } from 'ui'
import { inject, observer } from 'mobx-react'
import { addData } from 'firebase-mgmt'

import { Area } from './styled'
import React, { Component } from 'react'
import { compose } from 'recompose'

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
				addData('msg', {
					msg,
				})
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