import { action, decorate, observable } from 'mobx'

class Store {
	isOpen

	constructor(isOpen = false) {
		this.isOpen = isOpen
	}

	open() {
		this.isOpen = true
	}

	close() {
		this.isOpen = false
	}
}

export const ModalStore = decorate(Store, {
	isOpen: observable,
	open: action,
	close: action,	
})
