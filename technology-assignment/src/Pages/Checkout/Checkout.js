import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log('checkout', course);
    const { title, image_url, details, instructor,price } = course;
    return (
        <div className='text-center'>
            <h2 >Slected Course: {title}</h2>
            <p>{details}</p>
            <p>Course Fee: <span className='fw-bold'>${price}</span></p>
        </div>
    );
};

export default Checkout;