// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1t47jdSor6S8WL_sDccZQp4TrKemGewA",
  authDomain: "netflix2-1d98f.firebaseapp.com",
  projectId: "netflix2-1d98f",
  storageBucket: "netflix2-1d98f.appspot.com",
  messagingSenderId: "1022209111027",
  appId: "1:1022209111027:web:4270d5734f9302abf35886"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }