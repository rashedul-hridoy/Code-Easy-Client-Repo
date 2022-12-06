import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBeer,FaFilePdf,VscFilePdf } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { title, image_url, details, instructor,rating, total_enrolled,price } = course;
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'data',
        onAfterPrint: () => alert('printed')
    })
    return (
        <Container>
            <div ref={componentRef}>
            <div className="card text-center">
            <div className="card-header d-flex justify-content-center ">
             <h5 className="card-title me-4">{title}</h5>
             <button onClick={handlePrint} className=''><FaFilePdf></FaFilePdf></button>
            </div>
            <img className='image-container' src={image_url} class="card-img-top" alt="..."/>
            <div className="card-body">
                
                <p>Instructor: {instructor.name}</p>
                
                <p className="card-text">{details}</p>
                <p>Course Fee: <span className=' fw-bold'>$ {price}</span></p>
                <p>Rating: <span className='text-warning fw-bold'>{rating}</span></p>
                <p>Total Enrolled: <span className='fw-bold'>{total_enrolled}</span></p>
                <Link to={`/checkout/${course.id}`}><Button variant="primary">Get premium access</Button></Link>
                
            </div>
            
        </div>
            </div>
        </Container>
    );
};

export default CourseDetails;