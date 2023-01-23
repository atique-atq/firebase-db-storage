import React from 'react';
import { format } from 'date-fns';

const SingleEvent = ({info}) => {
    let {name, userID, location, date, time} = info
    let formattedDate = format(Date.parse(date), 'dd/MM/yyyy');
    return (
        <div className='bg-gray-300 mt-2 hover:bg-gray-500 hover:text-white hover:cursor-pointer p-2'>
            <div className='flex flex-row justify-between'>
                <p>{`${userID}: ${location}`}</p>
                <div>
                    <p className='text-sm'> {formattedDate} &nbsp; { format(Date.parse(`${date} ${time}`), 'kk:mm:ss')} </p>
                </div>
            </div>
            <p className='mt-2'>Person detected.</p>
        </div>
    );
};

export default SingleEvent;