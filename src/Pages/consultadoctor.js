import React from 'react';
//import logo from './logo.svg';
import Footer from '../Components/footer';
import CNavBar from '../Components/cnavbar';
//import ButtonPage from './Components/demo';\
import WhyTCS from '../Components/whytcs';
import Footer1 from '../Components/footer1';
import Faq from '../Components/faq';
import ChatComp from '../Components/chatcomp';
import Specialists from '../Components/specialists';
import '../App.css';


function ConsultDoctor() {
  return (
    <div className="App" >
      <CNavBar/>
      <ChatComp/>
   <Specialists/>
    <WhyTCS/>
    <Faq/>
      <Footer1/>
      <Footer/>
    </div>
  );
}

export default ConsultDoctor;