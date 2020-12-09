// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import about from '../assets/images/about_1.jpg'
import '../assets/styles/About.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const About = () => {
  return (
    <section className="about">
      <div className="imgContainer">
        <img src={about} alt="About image"/>
      </div>
      <div className="descriptionContainer">
        <h2>Maybelline Project</h2>
        <h3>What is this project?:</h3>
        <p>This project wants to consume the API https://makeup-api.herokuapp.com/ to provide the user with a list of products either by brands or by the type of product indicated.</p>
        <h3>How does it work??:</h3>
        <p>Using the React library for the user interface, SASS to build the respective style sheets and the FETCH service to correctly consume the endpoint. As a user, you must specify by means of 2 selections, if you want to obtain the products by the configured brands or, by a list of types of products also configured.</p>
        <p>From there, you will get a small card that will deliver the image of the product, its name, brand and description.</p>
      </div>
    </section>
  );
};
