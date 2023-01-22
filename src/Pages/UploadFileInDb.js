import { getDownloadURL, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';
import readXlsxFile from 'read-excel-file'
import { getFirestore } from "@firebase/firestore";
import { app } from "../firebase-config";
import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";

const db = getFirestore(app);
const UploadFileInDb = ({imageList}) => {
    const [fileUpload, setFileUpload] = useState(null);
    const [totalRow, setTotalRow] = useState([]);
    const usersCollectionRef = collection(db, "users");

    //upload file into db
    const uploadFile = () => {
        if(fileUpload==null) return;
        readXlsxFile(fileUpload[0]).then((rows) => {
            // `rows` is an array of rows
            for(let i=1; i <=imageList.length; i++){

                let dataRow = rows[i];
                let userID = dataRow[0];
                let location = dataRow[1];
                let gender = dataRow[2];
                let name = dataRow[3];
                let date = dataRow[4];
                let time = dataRow[5];
                let dataToInsert = {userID, location, gender, name, date, time};
                findSingleRowData(dataToInsert);
            }

        })
    }

    const findSingleRowData=(singleRowData)=>{
        let matchedImage = imageList.find(singleList => singleRowData.name === singleList._location.path_.split('/')[1].split('.')[0] );
         getDownloadURL(matchedImage).then((url) => {
            singleRowData.imgUrl = url;
            createUser(singleRowData)
         })
    }

    const createUser = async ({userID, name, gender, location, date, time, imgUrl}) => {
        let data = {userID, name, gender, location, date, time, imgUrl};
        console.log('--to be inserted:', data)
        await addDoc(usersCollectionRef, data);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            console.log('****', data);
            setTotalRow(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

    getUsers();
  }, []);

    return (
        <div>
            <h1 className='text-red-700 font-semibold'>Used only for uploading .xlsx into DB</h1>
            <input type="file" id="input" onChange={(event) => { setFileUpload(event.target.files)}}/>
            
            <div className='flex items-center justify-center'>
                <button className='btn btn-sm mt-2 btn-accent'disabled onClick={uploadFile}> Upload File</button>
                <span className='text-sm text-gray-600 ml-4 italic'>upload button has been disabled</span>
            </div>
            <p className='font-bold mt-10'>Total Row Inserted {totalRow.length}</p>            
        </div>
    );
};

export default UploadFileInDb;