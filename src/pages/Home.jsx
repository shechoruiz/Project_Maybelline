// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ItemContainer } from '../components/ItemContainer'
import { Footer } from '../components/Footer'

// ------------------------------ import styles and images
// import heroImg from '../assets/images/hero_1.jpg';
// import '../assets/styles/Hero.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ItemContainer />
      <Footer />
    </>
  );
};