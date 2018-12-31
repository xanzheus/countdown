import { action, decorate, observable } from 'mobx'

class Store {
	color = '#f44336'
	name = ''
	pic = ''
	isInit

	updateInfo({ name, color, pic }) {
		this.name = name
		this.color = color
		this.pic = pic
		this.isInit = true
	}
}

export const UserStore = decorate(Store, {
	color: observable,
	name: observable,
	pic: observable,
	isInit: observable,
	updateInfo: action,
})
