import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ButtonGroup, Toast } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {googleProviderLogin,signIn, gitHubProviderLogin, setLoading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleGoogleSignIn = () =>{
        googleProviderLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    const handleGitHubSignIn = () =>{
        gitHubProviderLogin(gitHubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if (user.uid) {
                navigate(from, { replace: true });
            }
            else {
                alert('Your logIn Please verify email.')
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(() => setLoading(false))

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}  className='w-50 mx-auto mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-danger mt-2">
                {error}
            </Form.Text>
            <br />
                
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='my-3' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <p className='mt-3'><small>No account yet? <Link to='/register'>Register</Link></small></p>
            <br />
            
        </Form>
        </div>
    );
};

export default Login;