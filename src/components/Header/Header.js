import React from 'react';
import './Header.css';
import logo from '../../images/logos/volunteer-logo.png'
import { Button } from '@material-ui/core';

const Header = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <nav>
                    <img style={{height: '70px'}} src={logo} alt=""/>
                <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/donations">Donations</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/admin">Admin</a></li>
                </ul>
            </nav>
            <div>
                <h2>I grow by helping people in need.</h2>
                <p><input style={{width: '300px', height: '30px'}} type="search" name="" placeholder="Search..."/><Button variant="contained" color="primary">Search</Button></p>
            </div>
        </div>
    );
};

export default Header;