
import {auth,onAuthStateChanged, signOut,db, collection, addDoc, query, getDocs,where ,  getStorage,
  ref,
  storage,
  getDownloadURL,
  uploadBytes,
  } from "./js/firebase.js";

let emaili = document.getElementById("emaili");
let name = document.getElementById("name");
let idd= document.getElementById("idd");
onAuthStateChanged(auth, (user) => {
 if (user) {
name.innerHTML = user.email.slice(0,user.email.indexOf("@"))  
 emaili.innerHTML = user.email;
 idd= user.uid;
console.log(idd)
return idd;


} else {
  location.assign("./form.html")
 
      }
 
  })

const logout = () =>{
    signOut(auth).then(() => {
        location.assign("./index.html")
      }).catch((error) => {
       
      });
  }

let logoutt = document.getElementById("logout");
logoutt.addEventListener("click", logout);
 const addbook  = async () => {
    
var title = document.getElementById("title");
var price = document.getElementById("price");
var auturname = document.getElementById("auturname");
var imageFile = document.getElementById("image").files[0];
const storageRef = ref(storage, 'images/' + imageFile.name);
const snapshot = await uploadBytes(storageRef, imageFile);

  
const imageUrl = await getDownloadURL(snapshot.ref);
const docRef = await addDoc(collection(db, "books"), {
title: title.value,
price: price.value,
auturname: auturname.value,
id:idd,
imageUrl: imageUrl,
});
console.log("Document written with ID: ", docRef.id);
Swal.fire({
    
  icon: "success",
  title: " Add Your book",
  
  
});
}
const addbookk = document.getElementById("addbook");
  
addbookk.addEventListener("click", addbook);
 