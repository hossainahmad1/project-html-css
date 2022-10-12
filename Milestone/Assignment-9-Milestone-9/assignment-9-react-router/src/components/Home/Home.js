import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Home.css'
const Home = () => {
    const loadData = useLoaderData();
    const quiz = loadData.data
    console.log(quiz)

    const handelToBtn = () => {
        console.log('ji')
    }

    return (
        <div>
            <div className='home-container'>
                <div className='home'>
                    <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
                </div>
                <div className='ml-2 home-info'>
                    <h4 className='text-4xl font-bold'>Coding Practise </h4>
                    <p className='font-bold'>The meaning of CONTEXT is the parts of a discourse that surround a word or passage and can throw light on its meaning. How to use context in a sentence.</p>
                </div>
            </div>
            <div>
                <div className='data-show-header'>
                    <h4 className='text-4xl font-bold'> This is Quiz Section</h4>
                </div>
                <div className='mt-5 data-show'>
                    {
                        quiz.map(data => <HomeDetails
                            handelToBtn={handelToBtn}
                            data={data}
                        ></HomeDetails>)
                    }

                </div>
            </div>
            <div>

            </div>


        </div>
    );
};

export default Home;