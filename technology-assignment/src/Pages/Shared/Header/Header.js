import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/binary-code.png'
import img2 from '../../../assets/images/binary-code.ico'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [theme, setTheme] = useState(true);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handleDark = () =>{
        setTheme(false);
    }
    const handleLight = () =>{
        setTheme(true);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><span className='me-2'><img src={img2} alt="" /></span>Code Easy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='navbaroptions' to='/'>Home</Link> </Nav.Link>
                        <Nav.Link><Link className='navbaroptions' to='/courses'>Courses</Link> </Nav.Link>
                        <Nav.Link><Link className='navbaroptions' to='/faq'>FAQ</Link> </Nav.Link>
                        <Nav.Link><Link className='navbaroptions' to='/blog'>Blog</Link> </Nav.Link>
                        
                        
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                <>
                                    <Nav.Link><span style={{color: 'white', marginRight: '5px'}}>{user?.displayName}</span></Nav.Link>
                                    <Nav.Link><Button variant='light' onClick={handleLogOut}>Log Out</Button></Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link><Link className='navbaroptions' to='/login'>Login</Link> </Nav.Link>
                                    <Nav.Link><Link className='navbaroptions' to='/register'>Register</Link> </Nav.Link>
                                </>
                            }
                        </>
                        
                        <Nav.Link><Link to="/profile">
                            {
                                user?.photoURL
                                    ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL
                                    } title={user.displayName}></Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </Link></Nav.Link>
                        <Nav.Link>
                            {
                                theme? <Button variant='light' onClick={handleDark}>Light Theme</Button> : <Button variant='light'  bg="light" onClick={handleLight}>Dark Theme</Button> 
                            }
                        
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;