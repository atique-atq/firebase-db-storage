import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { app } from "../firebase-config";
import {getStorage} from "firebase/storage"
import UploadFileInDb from './UploadFileInDb';

const storage = getStorage(app);
const Updatedb = () => {
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
            setImageList([]);
            response.items.forEach((item) => {
                setImageList((prev) => [...prev, item]);
                // getDownloadURL(item).then((url) => {
                // setImageList((prev) => [...prev, url]);
                // });
            });
        });
    }, []);


    return (
        <div>
            <div className="flex mx-4">
                <div className="grid h-56 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div className='flex flex-col justify-center items-center my-2'>
                        <h1 className='text-red-700 font-semibold'>This is is used only for Image uploading into Storage</h1>
                        <br />
                        <input type="file" multiple="multiple" onChange={(event) => { setImageUpload(event.target.files)}}/>

                        <div className='flex items-center justify-center'>
                            <button className='btn btn-sm mt-2 btn-accent btn-disabled' onClick={uploadFile}> Upload Image</button>
                            <span className='text-sm text-gray-600 ml-4 italic'>upload button has been disabled</span>
                        </div>
                        <p className='font-bold mt-10'>Uploaded Image Size {imageList.length}</p>

                        {/* <div className='flex flex-row flex-wrap mx-20 gap-2'>
                            {
                                imageList.map((url, index) => {
                                    return <img className='w-10' key={index} alt="" src={url}/> 
                                })
                            }
                        </div> */}
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid h-56 flex-grow card bg-base-300 rounded-box place-items-center">
                    <UploadFileInDb imageList={imageList}></UploadFileInDb>
                </div>
            </div>

        </div>
    );
};

export default Updatedb;