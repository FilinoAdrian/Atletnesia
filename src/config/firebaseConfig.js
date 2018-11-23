import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDBipFr3O7JNRWHVyvS9Ckt7b11CB6TxeM",
  authDomain: "atletnesia-5deb6.firebaseapp.com",
  databaseURL: "https://atletnesia-5deb6.firebaseio.com",
  projectId: "atletnesia-5deb6",
  storageBucket: "",
  messagingSenderId: "5019231098"
};

firebase.initializeApp(config);

export default firebase;