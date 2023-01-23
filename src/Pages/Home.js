import React from 'react';
import { FaSignInAlt, FaSignLanguage } from "react-icons/fa";

const Home = ({usersInfo}) => {
    console.log('all data:',usersInfo);
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
                <div className='w-4/12'>
                    <p>1st part</p>
                </div>

                <div className='w-4/12'>
                    <p>2nd part</p>
                </div>

                <div className='w-4/12 border-8 border-gray-300 mb-16 p-2'>
                    <p className='text-black text-2xl font-bold'>Events</p>
                </div>
            </div>
        </div>
    );
};

export default Home;