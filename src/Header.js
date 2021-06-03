import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header-icon" 
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" 
                alt=""
                />
            </Link>
            

            <div className='header-center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header-right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
