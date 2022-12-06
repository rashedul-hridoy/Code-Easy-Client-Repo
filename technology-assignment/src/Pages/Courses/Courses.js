import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Button from 'react-bootstrap/Button';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    
    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col className='bg-secondary' lg='4'>
                        <h2>Total Courses: {courses.length}</h2>
                        {
                            courses.map(course => <p key={course.id}>
                                <Link to={`/courses/${course.id}`}><Button variant="success">{course.title}</Button>{' '}</Link>
                            </p>)
                        }
                    </Col>
                    <Col lg='8'>
                        <div className='container'>
                            
                                <div className='courses-container'>
                                    
                                    {
                                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                                    
                                </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;