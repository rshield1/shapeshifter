import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from './GlobalStyles.js'
import Hero from './components/Hero/index';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Find your Trainer' data={productData} />
      <Feature />
      <Products heading='New Trainers' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;