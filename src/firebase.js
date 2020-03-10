import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCiWjsSKmeSCZheWyeJIaaP7JowhZcpI5o",
    authDomain: "bt3103-1e0dd.firebaseapp.com",
    databaseURL: "https://bt3103-1e0dd.firebaseio.com",
    projectId: "bt3103-1e0dd",
    storageBucket: "bt3103-1e0dd.appspot.com",
    messagingSenderId: "924846115008",
    appId: "1:924846115008:web:95abc0789873ac1bf2c525",
    measurementId: "G-XS3M2T0C8Z"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;