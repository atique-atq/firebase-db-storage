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

    const defaultInfo=[
      {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-db-task.appspot.com/o/images%2FMale19.jpg?alt=media&token=9357ca2c-bbfb-4de0-914c-60b4c8421099',
        gender: 'Male',
        date: '8-Jan-23',
        location: 'Chennai',
        name: 'Male19',
        time: '4:46:13 AM',
        userID: 'EVT0035',
      },
      {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/secquralse-d7114.appspot.com/o/images%2FFemale12.jpg?alt=media&token=010003ae-35ec-408a-b6a0-919e6f4a1d6d',
        gender: 'Female',
        date: '6-Jan-23',
        location: 'Bangalore',
        name: 'Female12',
        time: '10:20:29 PM',
        userID: 'EVT0024',
      } 
    ]
    const [usersInfo, setUsersInfo] = useState(defaultInfo);

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
      <Navbar usersInfo={usersInfo}></Navbar>
      <Home usersInfo={usersInfo}></Home>
      {/* used for data uploading */}
      {/* <Updatedb></Updatedb> */}

      <br />
      <br />
    </div>
  );
}

export default App;