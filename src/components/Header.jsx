// ------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom'

// ------------------------------ import styles and images
import logo from '../assets/images/Maybelline_1.png'
import '../assets/styles/Header.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="Logo Maybelline"/>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};
