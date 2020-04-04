//this is going to store Firebase realtime database API code
import { db } from "./firebase";
import Queue from "../Components/Queue";


//##########3 user API

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, Firstname,Lastname, Major, Year_Started, email, role) =>
  db.ref(`users/${id}`).set({
    Firstname,
    Lastname,
    Major,
    Year_Started,
    email,
    role
  });
  
  export const makeQueue = ( id, name, message, Student_id,Advisor) =>
  db.ref(`Queue/${id}`).set({
    name, message, Student_id,Advisor
  });
//returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");

export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");

// other APIs could come below
export const doGetAppointment = uid => db.ref(`Queue/${uid}`).once("value");
