import {
    auth,
    signInWithEmailAndPassword,
} from "./js/firebase.js";

const login = () => {
  var emaill = document.getElementById("mail");
  var passwordd = document.getElementById("word");
     signInWithEmailAndPassword( auth,emaill.value, passwordd.value)
   .then((userCredential) => {
      var user = userCredential.user;
       console.log(user.uid)
      Swal.fire({
        title: 'Successfully Login!',
        text: 'WELCOM',
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: ' Welcome Page!',
     }).then (function(result){
       if (result.isConfirmed) {
        location.assign("./welcome.html")
       };
     });
  })
 .catch((error) => {
  Swal.fire({
  icon: "error",
  title:error.message,
    });
    })
   }
   const loginBtn = document.getElementById("loginBtn");
  
  loginBtn.addEventListener("click", login);