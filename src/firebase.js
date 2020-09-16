import firebase from "firebase";

const firebaseConfig = "key config from firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
