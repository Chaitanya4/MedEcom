import React from 'react';
//import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\

import Footer1 from '../Components/footer1';

import '../App.css';
import ProductList1 from '../Components/productlistingproducts1';

function ProductListing1() {
   return (
      <div className="App" >
        <NavBar/>
      <ProductList1/>
    
        <Footer1/>
        <Footer/>
      </div>
    );
  }
  
  export default ProductListing1;