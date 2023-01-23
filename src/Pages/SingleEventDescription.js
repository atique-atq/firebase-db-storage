import { format } from 'date-fns';
import React from 'react';

const SingleEventDescription = ({selectedInfo}) => {
    let {name, location, date, time} = selectedInfo;
    let formattedTime = format(Date.parse(`${date} ${time}`), 'kk:mm:ss');
    let formattedDate = format(Date.parse(`${date} ${time}`), 'dd MMMM, yyyy');

    let getSuffixValue = (dayNumber) => {
        switch (dayNumber % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    let getDesiredDayFormat = (day) => {
        let dayNumber = day
        if (day[0] === '0'){
            dayNumber = day.slice(1);
        }
        let suffixValue = getSuffixValue(dayNumber);
        return [dayNumber, suffixValue];
    }
    
    let getSplittedDate = (date) => {
        let [dayMonth, year] = date.split(',');
        let [day, month] = dayMonth.split(' ');

        let [dayNumber, suffixValue] = getDesiredDayFormat(day);

        return[dayNumber, suffixValue, month, year];
    }

    let requiredDate = getSplittedDate(formattedDate);


    return (
        <div className=''>
            <div className='mb-20'>
              <div>
                  <h1 className='text-black text-2xl font-bold'>{selectedInfo.userID}</h1>          
                  <h1 className='text-black text-xl font-bold'>Person Detected</h1>  
              </div>

                <div className='grid grid-cols-2 my-8'>
                    <div>Name</div>          <div>: {name}</div>
                    <div>Location</div>      <div>: {location}</div>
                    <div>Date</div>          <div>: {date}</div>
                    <div>Time</div>          <div>: {formattedTime}</div>
                </div>  

                <div className='mt-5'>
                    <h1>Description:</h1>
                    <h1>{name} detected at</h1>
                    <p>{location} on {requiredDate[0]}
                    <span className='align-super text-xs'>{requiredDate[1]}</span>
                    {requiredDate[2]},
                    </p>
                    <p>{requiredDate[3]}.</p>
                </div>
            </div>         
        </div>
    );
};

export default SingleEventDescription;