// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
// import { ImportedComponent } from '../components/ImportedComponent ';

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
          <a href="">Home</a>
          <a href="">About</a>
        </nav>
      </div>
    </header>
  );
};
