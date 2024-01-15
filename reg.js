import {
  auth,
 
  createUserWithEmailAndPassword,
  doc, setDoc,db,

} from "./js/firebase.js";


let userdata = async(user)=>{
  await  setDoc(doc(db, "adduser",user.uid), {


    email: email.value,
    username: username.value,
    uid:user.uid,
    
  
});

}




const singUp = () =>{
   var email = document.getElementById("email");
    var password = document.getElementById("password");
    var  username = document.getElementById(" username");
   
    createUserWithEmailAndPassword( auth,email.value, password.value)
    .then((userCredential) => {
     var user = userCredential.user;
     Swal.fire({
     icon: "success",
    title: "Your register",
      });
     userdata(user)
     
    })
    
    .catch((error) => {
      Swal.fire({
      icon: "error",
      title:error.message,
        
        
      });
    
    
    })
  }
  const singBtn = document.getElementById("singBtn");

singBtn && singBtn.addEventListener("click", singUp);




  
  