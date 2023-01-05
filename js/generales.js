// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

// https://firebase.google.com/docs/web/setup#available-libraries
import {
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

  // Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyCJu5AFtATruWMJouaP9LB4lrbIv2tAOgY",
  authDomain: "agentes-de-excelencia.firebaseapp.com",
  databaseURL: "https://agentes-de-excelencia-default-rtdb.firebaseio.com",
  projectId: "agentes-de-excelencia",
  storageBucket: "agentes-de-excelencia.appspot.com",
  messagingSenderId: "1013460803165",
  appId: "1:1013460803165:web:f7a3a5789a2d47e816b7b4"
    
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
/* 
Se ha vuelto a desplegar ** firebaseConfig ** pues las diferentes versiones 
para el uso de auth y para el registro de nuevos datos se interfieren
entre sí.
VERSIÓN QUE SÍ PERMITE: https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js */


/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */


//FUNCIONES DE OPERACIONES GENERALES
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
