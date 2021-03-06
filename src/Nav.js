import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
    return (
        <nav>
            <ul className="nav-bar">
                <Link className="links" to="/home">
                    <li>Home</li>
                </Link>
                <Link className="links" to="/contact">
                    <li>Contact</li>
                </Link>
                <Link className="links" to="/user">
                    <li>User</li>
                </Link>
                <Link className="links" to="/posts">
                    <li>Posts</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;