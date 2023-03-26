// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFON7-LUpQmsJ9uYVkFK0GQGO0KbbTdTc",
    authDomain: "mycommerce-96bbb.firebaseapp.com",
    projectId: "mycommerce-96bbb",
    storageBucket: "mycommerce-96bbb.appspot.com",
    messagingSenderId: "275503058391",
    appId: "1:275503058391:web:ba9d2d0a67f63179010f92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;