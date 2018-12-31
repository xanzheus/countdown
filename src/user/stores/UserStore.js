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

	isUser(user) {
		return this.name === user.name && this.pic === user.pic && this.color === user.color
	}

	getInfo() {
		const { name, color, pic } = this
		return {
			name, color, pic,			
		}
	}
}

export const UserStore = decorate(Store, {
	color: observable,
	name: observable,
	pic: observable,
	isInit: observable,
	updateInfo: action,
})
