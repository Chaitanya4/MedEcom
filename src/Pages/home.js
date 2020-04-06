import React from 'react';
//import logo from './logo.svg';
import Footer from '../Components/footer';
import NavBar from '../Components/navbar';
//import ButtonPage from './Components/demo';\
import Header1 from '../Components/header1';
import FeatureBrands from '../Components/fb';
import ShopByHealth from '../Components/sbh';
import Offer from '../Components/offers';
import Footer1 from '../Components/footer1';
import NewArrival from '../Components/newarrival';
import BeautyGroom from '../Components/bag';
import Health from '../Components/haf';
import TrendingProducts from '../Components/trendingproducts';
import WinterEssentials from '../Components/winteressentials'; 
const homeComponent = () => {
  return (
    <div className="App">
    <NavBar/> 
    <Header1/>
    <FeatureBrands/>
    <ShopByHealth/>
    <Offer/>
    <NewArrival/>
    <WinterEssentials/>
    <TrendingProducts/>
    <Health/>
    <BeautyGroom/>
    <Footer1/>
    <Footer/>
  </div>
   
  );
}

export default homeComponent;