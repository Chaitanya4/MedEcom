import React from 'react';
//import logo from './logo.svg';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\
import SimilarProducts from '../Components/similarproducts';
import Footer1 from '../Components/footer1';
import DetailProducts from '../Components/detailproduct.js'
import DescribeProduct from '../Components/describeproduct.js';
import FreqCust from '../Components/fbtproduct.js';
import '../App.css';


function ProductDescription() {
  return (
    <div className="App">
      <NavBar/>
   
    <DescribeProduct/>
<DetailProducts/>
<FreqCust/>      
      <SimilarProducts/>
      <Footer1/>
      <Footer/>
    </div>
  );
}

export default ProductDescription;