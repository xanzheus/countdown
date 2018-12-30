import { action, decorate, observable } from 'mobx'

class Store {
	color = '#FF7F7F'
	name = ''
	pic = ''

	updateInfo({ name, color, pic }) {
		this.name = name
		this.color = color
		this.pic = pic
	}
}

export const UserStore = decorate(Store, {
	color: observable,
	name: observable,
	pic: observable,
	updateInfo: action,
})
