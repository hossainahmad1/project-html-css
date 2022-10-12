import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-head'>
                <h1 className='text-4xl font-bold'>My Creacker</h1>
            </div>
            <div className='anchor'>
                <Link to='home'>Home</Link>
                <Link to='topic'>Topic</Link>
                <Link to='statistic'>Statistic</Link>
                <Link to='blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;