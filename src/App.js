import "./App.css";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll, list} from "firebase/storage";

import Navbar from "./Pages/Navbar";
import Updatedb from "./Pages/Updatedb";

function App() {



  return (
    <div className="App">
      <Navbar></Navbar>
      {/* used for data upload */}
      {/* <Updatedb></Updatedb> */}
      


      <br />
      <br />
    </div>
  );
}

export default App;