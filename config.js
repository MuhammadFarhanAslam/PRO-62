import  firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBOi458l1nsJ5qfpyP3kR0DaV1P-QrOXWM",
  authDomain: "attendance-20f4a.firebaseapp.com",
  databaseURL: "https://attendance-20f4a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-20f4a",
  storageBucket: "attendance-20f4a.appspot.com",
  messagingSenderId: "496646580852",
  appId: "1:496646580852:web:cea87493f11f8cecbb3f21"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  