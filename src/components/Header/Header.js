import React from 'react';
import './Header.css';
import logo from '../../images/logos/volunteer-logo.png'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <nav>
                <Link to="/home">
                  <img style={{ height: '70px' }} src={logo} alt="" />
                </Link>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/donations">Donations</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h2>I grow by helping people in need.</h2>
                <p><input style={{ width: '300px', height: '30px' }} type="search" name="" placeholder="Search..." /><Button variant="contained" color="primary">Search</Button></p>
            </div>
        </div>
    );
};

export default Header;