import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyDtQuFVnMFi65Ax-175ddmPR1qmN-YUEds",
  authDomain: "weadvise-be3d3.firebaseapp.com",
  databaseURL: "https://weadvise-be3d3.firebaseio.com",
  projectId: "weadvise-be3d3",
  storageBucket: "weadvise-be3d3.appspot.com",
  messagingSenderId: "173226175304",
  appId: "1:173226175304:web:269644c902cbd75b88617d",
  measurementId: "G-JNC2H52LVW"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();


export { db, auth };
