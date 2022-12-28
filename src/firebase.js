import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCN_skGHIyTktm6zQD2aJ4dcNAGpMz-Sco",
    authDomain: "disney-clone-8e0af.firebaseapp.com",
    projectId: "disney-clone-8e0af",
    storageBucket: "disney-clone-8e0af.appspot.com",
    messagingSenderId: "181278881960",
    appId: "1:181278881960:web:edca6cf8a4edde37aeea9d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;