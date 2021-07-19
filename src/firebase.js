import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD2KGml6muSR1gUMIAKTpJhilKnSxTF8Uw",
    authDomain: "soproyectv2.firebaseapp.com",
    projectId: "soproyectv2",
    storageBucket: "soproyectv2.appspot.com",
    messagingSenderId: "52333837585",
    appId: "1:52333837585:web:ecdf075d619081590220b0"
  }


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }