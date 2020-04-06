import React from 'react';
//import logo from './logo.svg';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\
import SimilarProducts from '../Components/similarproducts';
import Footer1 from '../Components/footer1';
import CustomerFeedback from '../Components/customerfeedback';
import ProductDescribe from '../Components/productdescribe';
import ProductDetails from '../Components/productdetails';

import '../App.css';


function ProductDescription() {
  return (
    <div >
      <NavBar/>
     <ProductDescribe/>
     <ProductDetails/>
     <SimilarProducts/>
      <CustomerFeedback/>
    
      <Footer1/>
      <Footer/>
    </div>
  );
}

export default ProductDescription;