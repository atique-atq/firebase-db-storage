import React, { useState } from 'react';
import { FaSignInAlt } from "react-icons/fa";
import SingleEvent from './SingleEvent';
import SingleEventDescription from './SingleEventDescription';

const Home = ({usersInfo}) => {
    const defaultInfo={
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-db-task.appspot.com/o/images%2FMale19.jpg?alt=media&token=9357ca2c-bbfb-4de0-914c-60b4c8421099',
        gender: 'Male',
        date: '8-Jan-23',
        location: 'Chennai',
        name: 'Male19',
        time: '4:46:13 AM',
        userID: 'EVT0035',
    }
    const [selectedInfo, setSelectedInfo] = useState(defaultInfo);


    return (
        <div className='flex flex-row'>
            <div className='bg-[#00B8F1] w-12 h-screen flex flex-col justify-between pb-20'>
                    <label className="btn btn-ghost text-white p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>

                    <label className="btn btn-ghost text-white p-3">
                        <FaSignInAlt></FaSignInAlt>   
                    </label>
            </div>

            <div className='flex flex-row w-full h-screen'>
                <div className='w-4/12 bg-red-300 flex items-center ml-4'>
                    <SingleEventDescription selectedInfo={selectedInfo}></SingleEventDescription>
                </div>

                <div className='w-4/12 mb-16 p-2 flex flex-grow flex-col '>
                    <p className='text-black text-2xl font-bold mb-1'>{selectedInfo?.gender}</p>
                    <div className='w-full mt-2 flex items-center flex-grow justify-between'>
                        <img className='h-full' src={selectedInfo?.imgUrl} alt="profile"></img>
                    </div>
                </div>

                <div className='w-4/12 border-8 border-gray-300 mb-16 p-2 overflow-auto'>
                    <p className='text-black text-2xl font-bold mb-1'>Events</p>
                    {
                        usersInfo.map((info, index) => <SingleEvent
                        key={index}
                        info={info}
                        setSelectedInfo={setSelectedInfo}
                        ></SingleEvent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;