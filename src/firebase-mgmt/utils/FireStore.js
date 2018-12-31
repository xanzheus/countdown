import { firebase } from 'firebase-mgmt'

const db = firebase.firestore()

export function addData(collection, data) {
    db.collection(collection).add(data)
}
