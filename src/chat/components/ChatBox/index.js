import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Box } from './styled'
import { ChatItem } from 'chat'
import { compose } from 'recompose'
import { firestore } from 'firebase-mgmt'

export const ChatBox = compose(
	inject(({ user }) => ({
		user,
	})),
	observer,
)(class extends Component {
	state = {
		msgs: [],
	}
	componentDidMount() {
		this.listenToMsg()
	}
	componentDidUpdate() {
		this.scrollToBottom()
	}
	listenToMsg() {
		const { setMsgs } = this
		firestore.collection('msg').orderBy('date', 'asc').onSnapshot(querySnapshot => {
			const msgs = []
			querySnapshot.forEach(s => msgs.push(s.data()))
			setMsgs(msgs)
		})
	}
	setMsgs = msgs => {
		this.setState({ msgs })
	}
	scrollToBottom() {
		const chatBox = document.getElementById('chat-box')
		chatBox.scrollTop = chatBox.scrollHeight
	}
	render() {
		const { msgs } = this.state
		const { user } = this.props
		return (
			<Box id="chat-box">
				{msgs.map(msg => <ChatItem msg={msg} user={user} />)}							
			</Box>
		)
	}
})