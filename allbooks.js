
import {
  db, collection,getDocs, onSnapshot, auth, onAuthStateChanged,
} from "./js/firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (location.pathname !== "/welcome.html") {
      window.location = "/welcome.html"
    }
} else {
}

})

// let getallbooks = async () => {
//   const ref = collection(db, "books");

//   const ti = document.getElementById("ti")
//   const onsnap = onSnapshot(ref, (querySnapshot) => {
//     let count = 0;
//     querySnapshot.forEach((doc) => {

//       count++
//       ti.innerHTML += `
//             <tr>
//             <th>${count}</th>
//             <td style="height: 80px;">${doc.data().title}</td>
//             <td>${doc.data().price}</td>
//             <td>${doc.data().auturname}</td>
//                </tr>`
//     });

//   });
// }
// getallbooks();

// const getImageData = async () => {
//   const querySnapshot = await getDocs(collection(db, "books"));

//   querySnapshot.forEach((doc) => {
//       const imageData = doc.data();
//       displayImage(imageData.imageUrl);
//   });
// }
// const displayImage = (imageUrl) => {
 
// const imageContainer = document.getElementById("imageContainer");
// const imgElement = document.createElement("img","img");
//   imgElement.src = imageUrl;
//   imgElement.alt = "Book Image";
//   imageContainer.appendChild(imgElement);
// }
// getImageData();


let getallbooks = async () => {
  const ref = collection(db, "books");

  const ti = document.getElementById("ti");
  let count = 0;

  const onsnap = onSnapshot(ref, (querySnapshot) => {
    ti.innerHTML = ""; // Table ko refresh karne ke liye
    querySnapshot.forEach((doc) => {
      count++;
      const bookData = doc.data();
      const imageUrl = bookData.imageUrl ? bookData.imageUrl : "default-image.jpg"; // Agar koi image na ho toh default image

      ti.innerHTML += `
        <tr>
          <th>${count}</th>
          <td style="height: 80px;">${bookData.title}</td>
          <td>${bookData.price}</td>
          <td>
            <img src="${imageUrl}" alt="Author Image" class="author-image">
          </td>
        </tr>`;
    });
  });
};
getallbooks();
