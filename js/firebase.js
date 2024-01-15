import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {doc, setDoc,getFirestore,collection, addDoc,onSnapshot,query, getDocs,where ,  } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyBNCSIJTX0aCx2Uf5RIhb02uuMhtxW2Wvs",
  authDomain: "booklabrary-a87cd.firebaseapp.com",
  projectId: "booklabrary-a87cd",
  storageBucket: "booklabrary-a87cd.appspot.com",
  messagingSenderId: "306112243410",
  appId: "1:306112243410:web:b03dc22237dd593e246f0b",
  measurementId: "G-NHX87V3GQJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
createUserWithEmailAndPassword,
signOut,
doc, 
setDoc,
db,
collection, 
query, getDocs,where , 
addDoc,
onSnapshot,
storage,
getStorage,
ref,
uploadBytesResumable,
getDownloadURL,
uploadBytes
  
};
