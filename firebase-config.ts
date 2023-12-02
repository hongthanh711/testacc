// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBEOMTRJyL7mDXVKVEg-9mHwS6x5bMTHWg',
    authDomain: 'test-sign-in-92cac.firebaseapp.com',
    projectId: 'test-sign-in-92cac',
    storageBucket: 'test-sign-in-92cac.appspot.com',
    messagingSenderId: '3247711091',
    appId: '1:3247711091:web:6735bf34b2cb4993371b06',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)
