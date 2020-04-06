import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dabur from './../images/dabur.png';
import accuchek from './../images/accuchek.png';
import onetouch from './../images/onetouch.png';
import './../css/styling.css';
import { MDBRow, MDBContainer } from "mdbreact";
import heartrate from './../images/heartrate.png';
import heartrate_left from './../images/heartrate_for_left.png';
import heartrate_right from './../images/heartrate_for_right.png';
//import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
 //} from "mdbreact";
 
import  './../css/carousel.css';
var marginauto={margin:'auto'}
const FeatureBrands = () => {
  return (
    <div className="h-300">
    <MDBRow className="justify-content-center py-1"> 
<h3 style={{color: '#4f4646'}} className="fhshrink"><img src={heartrate_left} className="imgshrink"></img> <b>Featured Brands</b><img src={heartrate_right} className="imgshrink"></img></h3>
    </MDBRow>
    <MDBRow className="py-2">
    
        <OwlCarousel
        className="owl-theme px-5"
        loop
        center={true}
        dots={false}
       
        nav={true}
        autoplay={true}
        autoplayHoverPause={true}
        items={5}
        style={{ display: "flex",
          alignItems: "center"}}
    >
     
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={dabur}  alt="1"/></div>
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={accuchek} alt="2"/></div>
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={onetouch} alt="3"/></div>
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={dabur} alt="4"/></div>
               <div class="item"><img className="fixed_img h-100" style={marginauto}src={accuchek} alt="5"/></div>
               <div class="item"><img className="fixed_img h-100" style={marginauto} src={onetouch} alt="6"/></div>
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={dabur} alt="7"/></div>
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={accuchek} alt="8"/></div>
         <div class="item"><img className="fixed_img h-100" style={marginauto} src={onetouch} alt="9"/></div>
               <div class="item"><img className="fixed_img h-100" style={marginauto} src={dabur} alt="10"/></div>
              
    </OwlCarousel>
    
    </MDBRow> 
    </div>
  );
}

export default FeatureBrands;