
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA8BjZ9YDPOKLY34FmSaHyLyOyaiU8ULEA",
  authDomain: "fir-db-task.firebaseapp.com",
  projectId: "fir-db-task",
  storageBucket: "fir-db-task.appspot.com",
  messagingSenderId: "643080622684",
  appId: "1:643080622684:web:a14b08d5cb39d7f9a9cc99",
  measurementId: "G-PNYYK2MN0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);