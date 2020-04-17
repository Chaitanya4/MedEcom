import React from 'react';
//import logo from './logo.svg';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\
import AlternateProducts from '../Components/alternateproducts';
import Footer1 from '../Components/footer1';
import DetailProducts1 from '../Components/detailproduct1.js'
import DescribeProduct1 from '../Components/describeproduct1.js';
import FreqCust1 from '../Components/fbtproduct1.js';
import '../App.css';


function ProductDescription1() {
  return (
    <div className="App">
      <NavBar/>
   
    <DescribeProduct1/>
<DetailProducts1/>
<FreqCust1/>      
      <AlternateProducts/>
      <Footer1/>
      <Footer/>
    </div>
  );
}

export default ProductDescription1;