
import React from 'react';
import Menu from './Menu.jsx';

export const Home = () => {


  return (
    <>
      <div className='nav-bar'>
        <h2>feane</h2>
        <a href=''>Home</a>
        <a href=''>Menu</a>
        <a href=''>About</a>
        <a href=''>Book-Table</a>
        <button className='nav-button'>Order Online</button>
      </div>

      <div className='home-page'>
        <div className='hero-text'>
          <h1>Welcome to Our Restaurant</h1>
          <p>Delicious food, cozy ambiance, and memorable moments.</p>
          <button>Order Now</button>
        </div>

      </div>  
      <Menu />
    
    </>
  );
};

