import React from 'react';
import ShowOption from '../ShowOption/ShowOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowQuiz = ({ data }) => {
    const opstionDatas = data.options
    const { question, correctAnswer } = data

    const opstionClick = (opstionData) => {
        if (correctAnswer === opstionData) {
            // alert('correct')
            toast.success('Correct Answer')
        }
        else {
            // alert('wrong')
            toast.error('Wrong Answer')
        }
    }
    return (
        <div className='w-3/5 mx-auto'>
            <p className='text-2xl py-7'>Quiz : {question}</p>
            {
                opstionDatas.map(opstionData => <ShowOption
                    opstionData={opstionData}
                    opstionClick={opstionClick}
                    key={opstionData.id}
                ></ShowOption>)
            }
        </div >
    );
};

export default ShowQuiz;