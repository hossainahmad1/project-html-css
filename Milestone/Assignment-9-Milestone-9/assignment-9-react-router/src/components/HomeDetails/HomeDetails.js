import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeDetails.css'
const HomeDetails = ({ data, handelToBtn }) => {

    const { logo, name, total, id } = data;
    // console.log(data)
    return (
        <div className='show-data'>
            <img src={logo} alt="" />
            <div className='show-data-info'>
                <div>
                    <h4 className='text-2xl font-bold'>{name}</h4>
                </div>
                <div>
                    <p className='font-bold'>Total:{total}</p>
                </div>
                <div className='btn-show'>
                    <Link to={`/quiz/${id}`}>

                        <button className='handler-btn' onClick={() => handelToBtn()}>Start Practise</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;