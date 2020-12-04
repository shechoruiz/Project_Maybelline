// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import heroImg from '../assets/images/hero_1.jpg';
import '../assets/styles/Hero.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="Hero image"/>
    </div>
  );
};
