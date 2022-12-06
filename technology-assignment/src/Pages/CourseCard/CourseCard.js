import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    
    const { title,image_url,details,instructor} = course;
    return (
        
        <div className="card" >
        <img className='image-container' src={image_url} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>By {instructor.name}</p>
          <Link to={`/courses/${course.id}`}><Button variant="primary">Course Details</Button></Link>
        </div>
      </div>
        
    );
};

export default CourseCard;