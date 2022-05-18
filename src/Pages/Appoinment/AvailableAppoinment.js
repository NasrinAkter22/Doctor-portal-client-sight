import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ date }) => {
    return (
        <div>
            <h4 className='text-xl text-primary text-center font-bold py-20' >Available  Appoinment on  {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppoinment;
