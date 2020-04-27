import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
        <nav className="nav">
            <ul>
            <li><Link to="/">Contacts</Link></li>
            <li><Link to="/create">Create Contact</Link></li>
            </ul>
        </nav>
    )
    }
}

export default Navbar;