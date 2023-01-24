
import { initializeApp } from "firebase/app";
// import {getStorage} from "firebase/storage"

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId

  apiKey: "AIzaSyAdoI1rwFXiEtOajY4JAfin4l8sQEJZttg",
  authDomain: "secquralse-d7114.firebaseapp.com",
  projectId: "secquralse-d7114",
  storageBucket: "secquralse-d7114.appspot.com",
  messagingSenderId: "431068584719",
  appId: "1:431068584719:web:d2ec04b20b3217b54e7c7a"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);