import { ModalStore } from 'modal'

class PageStore {
	stores = {}

	constructor() {
		this.stores.sampleModal = new ModalStore()
	}
}

export const store = new PageStore()
