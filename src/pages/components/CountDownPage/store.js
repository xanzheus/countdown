import { ModalStore } from 'modal'
import { UserStore } from 'user'

class PageStore {
	stores = {}

	constructor() {
		this.stores.userInput = new ModalStore(true)
		this.stores.user = new UserStore()
	}
}

export const store = new PageStore()
