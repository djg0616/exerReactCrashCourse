import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkSytle} to="/">Home</Link> | 
            <Link style={linkSytle} to="/about">About</Link>
        </header>
    )
}

const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'Center',
    padding: '10px'
}

const linkSytle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;