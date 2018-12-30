import { Base } from 'ui'
import { CountDownPage } from 'pages'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
	<>
		<Base />
		<CountDownPage />
	</>
)

ReactDOM.render(<App />, document.getElementById('root'))
