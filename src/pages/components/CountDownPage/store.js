import { ModalStore } from 'modal'
import { UserStore } from 'user'

class PageStore {
	stores = {}

	constructor() {
		this.stores.userInput = new ModalStore(true)
		this.stores.colorPicker = new ModalStore()
		this.stores.user = new UserStore()
	}
}

export const store = new PageStore()
