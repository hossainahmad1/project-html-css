import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

const QuizsDetails = () => {
    const allData = useLoaderData()
    const datas = allData.data.questions
    // console.log(data)


    return (
        <div>
            {
                datas.map(data => <ShowQuiz
                data={data}
                key={data.id}
                ></ShowQuiz> )
            }
        </div>
    );
};

export default QuizsDetails;