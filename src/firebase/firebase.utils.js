import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8cSzFZvMeOAy0wDGIa86S0OdITCpYvXc",
    authDomain: "crwn-db-3ce7a.firebaseapp.com",
    databaseURL: "https://crwn-db-3ce7a.firebaseio.com",
    projectId: "crwn-db-3ce7a",
    storageBucket: "crwn-db-3ce7a.appspot.com",
    messagingSenderId: "927211636771",
    appId: "1:927211636771:web:0413a8116173907a054996",
    measurementId: "G-ETFPTJN25V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
