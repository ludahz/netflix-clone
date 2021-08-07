import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBE-cSc53t-pVgBVRRHsvBQeftf70MEMdk',
  authDomain: 'netflix-clone-a8473.firebaseapp.com',
  projectId: 'netflix-clone-a8473',
  storageBucket: 'netflix-clone-a8473.appspot.com',
  messagingSenderId: '639703004061',
  appId: '1:639703004061:web:29d883e4c461785c073574',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
