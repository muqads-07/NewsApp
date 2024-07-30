import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="logo">NewsApp</div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/entertainment">Entertainment</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/health">Health</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
