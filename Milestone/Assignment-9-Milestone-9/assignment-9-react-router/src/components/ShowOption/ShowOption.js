import React from 'react';

const ShowOption = ({ opstionData, opstionClick }) => {
    // console.log(opstionData)
    // const { } = opstionData
    return (
        <div>
            <p onClick={() =>opstionClick( opstionData)} className='text-lg hover:bg-slate-700 p-3 hover:text-white'>{opstionData}</p>
        </div>
    );
};

export default ShowOption;