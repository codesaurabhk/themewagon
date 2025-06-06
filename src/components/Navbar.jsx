import React from 'react';
import './Navbar.css';
import { FaBars, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.svg'

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className='menu'>
        <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />

      </div> <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>
      

      <div className="nav-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" className='search' placeholder="Search..." />
        </div>
        <FaBell className="nav-icon" />
        <FaUserCircle className="nav-icon" />
      </div>
    </div>
  );
};

export default Navbar;
