import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDpRxX8pLs-KGRAlt0NH_bfxeFwSDbdaxM",
    authDomain: "wily-app-90ed6.firebaseapp.com",
    projectId: "wily-app-90ed6",
    storageBucket: "wily-app-90ed6.appspot.com",
    messagingSenderId: "372763404902",
    appId: "1:372763404902:web:bc87ed0a06e04d86925ba7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();




  
