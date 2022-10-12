import React from 'react';
import ShowOption from '../ShowOption/ShowOption';

const ShowQuiz = ({ data }) => {
    const opstionDatas = data.options
    const { question, correctAnswer } = data



    const opstionClick = (opstionData) => {
        if (correctAnswer === opstionData) {
            alert('correct')
        }
        else {
            alert('wrong')
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