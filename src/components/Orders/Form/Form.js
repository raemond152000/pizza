import { useState } from 'react';
import React, { Component }  from 'react';
import uuid from 'react-uuid';
import './Form.scss';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../../redux/ordersSlice';
import api from '../../../api';
import { Navbar, Nav, Container, Col, Row, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom"




function Form(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [style, setStyle] = useState('default');
    const [crust, setCrust] = useState('default');
    const [cheese, setCheese] = useState("default");
    const [errorMessage, setErrorMessage] = useState(null);
    const [saving, setSaving] = useState(false);
    let navigate = useNavigate();

    const handleDescriptionChange = (event) => {
        setName(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const handleStyleChange = (event) => {
        /*  if (event.target.value ==='default') {
             setErrorMessage(' Please choose one');
         } */
        setStyle(event.target.value);
    }
    const handleCrustChange = (event) => {
        /* if (event.target.value ==='default') {
            setErrorMessage(' Please choose one');
        } */
        setCrust(event.target.value);
    }
    const handleExtraCheeseChange = (event) => {

        setCheese(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate the state
        let errors = [];
        if (style === 'default') {
            errors.push('Please choose your pizza');
        }

        if (crust === 'default') {
            errors.push('Please choose your crust');
        }
        if (cheese === 'default') {
            errors.push('Please choose your cheese');
        }
        if (address === '') {
            errors.push('Please input address');
        }
        if (name === '') {
            errors.push('Please input name');
        }

        // Check for error
        if (errors.length > 0) {
            setErrorMessage(errors);
        }
        else { // There are no error on the form

            // TODO: Something with the data
            // - Save in the database?
            // - Later in the course

            setErrorMessage(null);
            const newOrderForm = {
                id: uuid(),
                name: name,
                address: address,
                style: style,
                crust: crust,
                cheese: cheese
            };
            setSaving(true);

            api.post('/orders', newOrderForm)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(addOrder(newOrderForm));
                        setName('');
                        setAddress('');
                        setStyle('');
                        setCrust('');

                        setErrorMessage(null);
                        setSaving(false);

                    }
                    navigate("/orders");
                });

        }


    }

    return (

        <Container>
            <Row>
                <Col sm={6}>
                   {/*  <div>
                        <img src='./pizza.jpg'></img>
                    </div> */}
                    <div className='formBanner'>
                    
                   <h2>CHOOSE YOUR PIZZA!</h2> 
                   <br></br>
                    <p>
                        Please feel free to choose and style your own pizza,
                        Fill out the form and we'll send the pizza on your way!
                    </p>
                    <p>
                        Made the order already? Checkout your orders and others who have enjoyed their One Free Pizza!
                    </p>
                    </div>
                    <NavLink to="/orders" className='text-link'>
                    <Button variant="warning">
                         See Orders
                        </Button>
                    </NavLink>
                </Col>
                <Col sm={1}>

                </Col>
                <Col sm={5}>
                <div className='formDiv'>
                    <form onSubmit={handleSubmit}>

                        <div className="field">
                            {errorMessage && (

                                <div className='error'>
                                    Please, verify the entered data:
                                    <ul>
                                        {errorMessage.map(
                                            (error, index) => (
                                                <li key={index}>{error}</li>
                                            )
                                        )}
                                    </ul>
                                </div>

                            )}

                            <label>Pizza Style:</label>
                            <div>
                                <select
                                    defaultValue={style}
                                    onChange={handleStyleChange}
                                >
                                    <option value="default" disabled hidden>
                                        Choose your Pizza
                                    </option>
                                    <option value={'Hawaiian'}>Hawaiian</option>
                                    <option value={'Pepperoni'}>Pepperoni</option>
                                    <option value={'Canadian'}>Canadian</option>
                                    <option value={'Supreme'}>Supreme</option>
                                    <option value={'Cheese'}>Cheese</option>
                                    <option value={'Margherita'}>Margherita</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                            <label>Pizza Crust:</label>
                            <div>
                                <select
                                    defaultValue={style}
                                    onChange={handleCrustChange}
                                >
                                    <option value="default" disabled hidden>
                                        Choose your Pizza Crust
                                    </option>
                                    <option value={'Original Crust'}>Original Crust</option>
                                    <option value={'Thin Crust'}>Thin Crust</option>
                                    <option value={'Gluten-Free Crust'}>Gluten-Free Crust</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">

                            <label>Cheese:</label>
                            <div>
                                <select
                                    defaultValue={cheese}
                                    onChange={handleExtraCheeseChange}
                                >
                                    <option value="default" disabled hidden>
                                        Want Extra Cheese?
                                    </option>
                                    <option value={true}>Extra Cheese</option>
                                    <option value={false}>Regular</option>
                                </select>
                            </div>
                        </div>

                        <div className="field">

                            <label>Name:</label>
                            <div>
                                <input
                                    type='text'
                                    maxLength={150}
                                    value={name}
                                    onChange={handleDescriptionChange}
                                />
                            </div>

                        </div>
                        <div className="field">
                            <label>Address:</label>
                            <div>
                                <input
                                    type='text'
                                    maxLength={150}
                                    value={address}
                                    onChange={handleAddressChange}
                                />

                            </div>
                        </div>
                        <button type='submit'>Order</button>
                        {saving && (
                            <div className='saving'>Saving...</div>
                        )}


                    </form>
                </div>
                </Col>
            </Row>


        </Container>



    );
}
export default Form;

