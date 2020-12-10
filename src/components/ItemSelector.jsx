// ------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom'

// ------------------------------ import styles and images
import '../assets/styles/ItemSelector.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ItemSelector = ({ link, icon, title, description }) => {
  return (
    <Link to={`/${link}`}>
      <section className="itemSelector">
        <div className="iconSelector">
          <img src={icon} alt="Icon Product" />
        </div>
        <div className="titleSelector">
          <p>{title}</p>
        </div>
        <p className="descriptionSelector">{description}</p>
      </section>
    </Link>
  );
};

