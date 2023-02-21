import { NavLink,Link  } from "react-router-dom";
import React, { Component }  from 'react';
import './MainMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoPizzaOutline } from "react-icons/io5";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';
import { signup, login, logout, useAuth, auth, db } from "../../firebaseConfig";
import { Form, Button, Card, Alert } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'

/* const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'; */


function MainMenu() {

  //for auth user
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef()
  const passwordRef = useRef()
  const signUpEmailRef = useRef()
  const signUpPasswordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")

  //show modal login and signup page
  const [show, setShow] = useState(false);
  const [signUpShow, setsignUpShow] = useState(false);

//for closing login modal
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setsignUpShow(false)
  }
//for closing signup modal
  const handleSignUpClose = () => setsignUpShow(false);
  const handleSignUpShow = () => {
    setShow(false);
    setsignUpShow(true)
  }

//sign up function
  async function handleSignup(e) {
    setLoading(true);
    e.preventDefault();
    if (signUpPasswordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")       
      }
 
        try {
            setError("")
            setLoading(true)
         await  signup(signUpEmailRef.current.value, signUpPasswordRef.current.value)
        } catch(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            setError('Failed to create the account')
        }
   alert('registered successfully');
   setLoading(false);
   setsignUpShow(false);
   setError("");
  }

//login
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      alert('Login successfully');
      console.log('success login')
      setShow(false)
    } catch {
      var errorMessage = error.message;
      console.log(errorMessage);
      setError("Failed to log in")
    }
    setLoading(false);

  }

//logout
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }


    return (
        <Container>
        <Container>                    
            <Navbar.Brand href="/" className="icon"  sticky="top" ><FontAwesomeIcon icon="fa-brands fa-facebook-square" /><IoPizzaOutline /> <FontAwesomeIcon icon="fa-brands fa-facebook-square" /></Navbar.Brand>
            <div className="title"> One Free Pizza</div>
           
            
            <Nav className="me-auto">
               
                <NavLink to="/" className='text-link'>Home</NavLink>    
                <NavLink to="/get-your-pizza" className='text-link'>Get Your Free Pizza</NavLink>                   
                <NavLink to="/orders" className='text-link'>Orders</NavLink>   
              {/*  {currentUser && <span className='text-link' id="loggedAs" >Logged in as: {currentUser?.email} </span>}  */}
                {!currentUser &&<NavLink to="#" className='text-link'  onClick={handleShow}> Log In</NavLink>} 
                  {/* show logout button if signed in */} 
               {currentUser &&   <Link  to="#" className='text-link' id="logout" onClick={handleLogout}> Log Out</Link >}               
          

        
          

       

        <a href="#" class="loginBtn" onClick={handleShow}>
         
        </a>

        {/* - - Login Modal - - */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>

                <Form>
                  <Form.Group id="email">
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} placeholder="Email" type="email" required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                  </Form.Group>
                  <Button className="w-100" onClick={handleLogin}>
                    Log In
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <div className="w-100 text-center mt-2">
              <span onClick={handleSignUpShow}>Need an account? Sign Up</span>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* - - SignUp Modal - - */}
         <Modal show={signUpShow} onHide={handleSignUpClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Body>

                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group id="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" ref={signUpEmailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" ref={signUpPasswordRef} required />
                  </Form.Group>
                  <Form.Group id="passwordConfirmation">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" onClick={handleSignup}>Sign Up</Button>
                </Form>

              </Card.Body>
            </Card></Modal.Body>
          <Modal.Footer>
         
            <div className="w-100 text-center mt-2">
            <span onClick={handleShow}>Already have an account? Log In</span>
            </div>
            <Button variant="secondary" onClick={handleSignUpClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>               
            </Nav>
        </Container>
    </Container>
    );
}

export default MainMenu;
