import "./App.css";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll, list} from "firebase/storage";
import Navbar from "./Pages/Navbar";
import Updatedb from "./Pages/Updatedb";
import Home from "./Pages/Home";
import { app } from "./firebase-config";
import { collection, doc, getDocs, getFirestore } from "@firebase/firestore";

function App() {
    const db = getFirestore(app);
    const usersCollectionRef = collection(db, "users");

    const [usersInfo, setUsersInfo] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
           // getting information from firebase database
            // const data = await getDocs(usersCollectionRef);
            // setUsersInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

      getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home usersInfo={usersInfo}></Home>
      {/* used for data uploading */}
      {/* <Updatedb></Updatedb> */}

      <br />
      <br />
    </div>
  );
}

export default App;