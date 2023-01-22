import "./App.css";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll, list} from "firebase/storage";
import { storage } from "./firebase";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] =useState([]);

  const imageListRef = ref(storage, "images/");


  //image upload function
  const uploadFile = () => {
    if (imageUpload == null) return;

    for(let i=0; i<imageUpload.length; i++){
      const imageRef = ref(storage, `images/${imageUpload[i].name}`);
      
      //upload image in firebase
      uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList ((prev) => [...prev, url]);
      });
      });
    }
    alert('Image uploaded!');

  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response);
      setImageList([]);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div className="App">

      <input type="file" multiple="multiple" onChange={(event) => { 
        console.log('images are:', event.target.files)
        setImageUpload(event.target.files)
      }}/>

      <button onClick={uploadFile}> Upload Image</button>

      <br />
      <br />

      <p>total image size is {imageList.length}</p>

      {
        imageList.map((url, index) => {
         return <img key={index} alt="" src={url}/> 
      })
      }
    </div>
  );
}

export default App;