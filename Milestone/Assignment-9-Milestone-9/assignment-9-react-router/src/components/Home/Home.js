import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Home.css'
const Home = () => {
    const loadData = useLoaderData();
    const quiz = loadData.data
    console.log(quiz)
   
  const  handelToBtn =()=>{
        console.log('ji')
    }

    return (
        <div>
            <div className='home-container'>
                <div className='home'>
                    <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
                </div>
                <div className='home-info'>
                    <h2>This is a heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut expedita voluptates maxime aliquid perspiciatis a illo. Culpa, consectetur. Est doloremque dolorum odio. Molestiae cumque neque praesentium quos at. Quod.</p>
                </div>
            </div>
            <div>
                <div className='data-show-header'>
                    <h4 > this is home page :{quiz.length}</h4>
                </div>
                <div className='data-show'>
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