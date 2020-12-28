import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCOThbtZcon3Z8fM-HGmxGW27ckn9YZbvA',
  authDomain: 'eventos-8b39d.firebaseapp.com',
  projectId: 'eventos-8b39d',
  databaseURL: 'https://eventos-8b39d-default-rtdb.firebaseio.com',
  storageBucket: 'eventos-8b39d.appspot.com',
  messagingSenderId: '247786772646',
  appId: '1:247786772646:web:f17df282644f2a86ec3c67',
  measurementId: 'G-VCSE7FQW1S',
};
// Initialize Firebase
// firebase.analytics();
export default firebase.initializeApp(firebaseConfig);
