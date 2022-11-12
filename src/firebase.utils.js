import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBBKHitfdArPhEAxW-rIi-bFJBBmFGk0LY",
  authDomain: "practice-project-b3e5a.firebaseapp.com",
  databaseURL: "https://practice-project-b3e5a-default-rtdb.firebaseio.com",
  projectId: "practice-project-b3e5a",
  storageBucket: "practice-project-b3e5a.appspot.com",
  messagingSenderId: "451892798212",
  appId: "1:451892798212:web:106cd54fdd1ea2b43ae651"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export {db};

  