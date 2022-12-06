import React from 'react';
import img3 from '../../assets/images/img3.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-center'>Welcome to Code Easy</h2>
            <div className='mt-4 text-center'>
                <p>Here you can Learn different programming language. We make Programming language very easy and fun to learn to the students. We teach courses such as Python, C++, javascript etc.. Hope You will have a great time with use </p>
            </div>
            <div className='img-container'>
                <img src={img3} alt="" />


            </div>
            
        </div>
    );
};

export default Home;