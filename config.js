import firebase from 'firebase';
require('@firebase/firestore')

// const firebaseConfig = {
//   apiKey: "AIzaSyCAFVxXEbA7TlhIA_u68-lBEDWuqlm48C0",
//   authDomain: "book--santa.firebaseapp.com",
//   databaseURL: "https://book--santa.firebaseio.com",
//   projectId: "book--santa",
//   storageBucket: "book--santa.appspot.com",
//   messagingSenderId: "306804228211",
//   appId: "1:306804228211:web:dc4fa0e7bd2fc077996a06"
// };
var firebaseConfig = {
  apiKey: "AIzaSyCAFVxXEbA7TlhIA_u68-lBEDWuqlm48C0",
  authDomain: "book--santa.firebaseapp.com",
  databaseURL: "https://book--santa.firebaseio.com",
  projectId: "book--santa",
  storageBucket: "book--santa.appspot.com",
  messagingSenderId: "306804228211",
  appId: "1:306804228211:web:dc4fa0e7bd2fc077996a06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
