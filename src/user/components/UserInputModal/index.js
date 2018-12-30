import { Button, Input } from 'ui'
import { Half, InputContainer, Row } from './styled'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Modal } from 'modal'
import { compose } from 'recompose'

export const UserInputModal = compose(
	inject(({ user, userInput }) => ({
		updateInfo: info => user.updateInfo(info),
		close: () => userInput.close()
	})),
	observer,
)(class extends Component {
	state = {
		name: '',
		pic: '',
		color: '',
	}

	onInputChange = ({ target: { value, name }}) => {
		this.setState({
			[name]: value,
		})
	}

	submit = () => {
		const { updateInfo, close } = this.props
		updateInfo(this.state)
		close()
	}

	render() {
		const { pic, name, color } = this.state
		return (
			<Modal name="userInput">
				<InputContainer>
					<Row>
						<Input name="name" placeholder="Name" value={name} onChange={this.onInputChange} />
					</Row>
					<Row>
						<Half>
							<Input name="pic" placeholder="Profile Pic" value={pic} onChange={this.onInputChange} />
						</Half>
						<Half isRight>
							sf
						</Half>
					</Row>
					<Row isCenter>
						<Button onClick={this.submit}>Let's Chat</Button>
					</Row>
				</InputContainer>
			</Modal>
		)
	}
})
