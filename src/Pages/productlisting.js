import React from 'react';
//import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\

import Footer1 from '../Components/footer1';

import '../App.css';
import ProductList from '../Components/productlistingproducts';

function ProductListing() {
   return (
      <div className="App" >
        <NavBar/>
      <ProductList/>
    
        <Footer1/>
        <Footer/>
      </div>
    );
  }
  
  export default ProductListing;