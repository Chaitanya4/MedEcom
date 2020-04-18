import React from 'react';
//import logo from './logo.svg';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\
import AlternateProducts from '../Components/alternateproducts';
import Footer1 from '../Components/footer1';
import DetailProducts2 from '../Components/detailproduct2.js'
import DescribeProduct2 from '../Components/describeproduct2.js';
import FreqCust1 from '../Components/fbtproduct1.js';
import '../App.css';


function ProductDescription2() {
  return (
    <div className="App">
      <NavBar/>
   
    <DescribeProduct2/>
<DetailProducts2/>
<FreqCust1/>      
      <AlternateProducts/>
      <Footer1/>
      <Footer/>
    </div>
  );
}

export default ProductDescription2;