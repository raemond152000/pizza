import './Header.scss';
import React, { Component }  from 'react';
import { IoPizzaOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import MainMenu from '../MainMenu/MainMenu';

function Header() {
    return (

        <>        
            <header>            
                <MainMenu />
            </header>
        </>
    )


}

export default Header;