import { Picker, PickerModal } from './styled'
import { inject, observer } from 'mobx-react'

import { CirclePicker } from 'react-color'
import React from 'react'
import { compose } from 'recompose'

export const ColorPicker = compose(
	inject(({ colorPicker }) => ({
		open: () => colorPicker.open(),
		close: () => colorPicker.close(),
	})),
	observer,
)(
	({ open, color, onSelectColor, close }) => (
		<>
			<Picker onClick={open} color={color} />
			<PickerModal name="colorPicker">
				<CirclePicker onChangeComplete={color => {
					onSelectColor(color)
					close()
				}} color={color} />
			</PickerModal>
		</>
	)	
)