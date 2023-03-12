// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJpHwRMcFKbMIUcP0i6aS3s5UDzjj01AY',
  authDomain: 'netflix-clone-66485.firebaseapp.com',
  projectId: 'netflix-clone-66485',
  storageBucket: 'netflix-clone-66485.appspot.com',
  messagingSenderId: '347762636469',
  appId: '1:347762636469:web:9be8b04f0f4a365c1eb0fc',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
