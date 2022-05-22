import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";




//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdt6lIGfXCBmovCNnrxB-blf7ql1S7eYI",
  authDomain: "raemond-project-1.firebaseapp.com",
  databaseURL: "https://raemond-project-1.firebaseio.com",
  projectId: "raemond-project-1",
  storageBucket: "raemond-project-1.appspot.com",
  messagingSenderId: "808805796858",
  appId: "1:808805796858:web:87aa57c9d6c1b3c283b243"
};

//Initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use for firebase database and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

export function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        return db.collection('users').doc(cred.user.uid).set({
          favourites : [],
          recipes : []
        })
    });
  }
  
  export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  export function logout() {
    return signOut(auth);
  }
  
  // Custom Hook to set currentUser
  export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }