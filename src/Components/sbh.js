import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon_white_affordable from './../images/icon_white_affordable.png';
import icon_white_cardiac from './../images/icon_white_cardiac.png';
import icon_white_diabetes from './../images/icon_white_diabetes.png';
import icon_white_eye from './../images/icon_white_eye.png';
import icon_white_jointpain from './../images/icon_white_jointpain.png';
import icon_white_kidney from './../images/icon_white_kidney.png';
import icon_white_liver from './../images/icon_white_liver.png';
import icon_white_personal from './../images/icon_white_personal.png';
import icon_white_reliable from './../images/icon_white_reliable.png';
import icon_white_secure from './../images/icon_white_secure.png';
import icon_white_stomach from './../images/icon_white_stomach.png';

import './../css/styling.css';
import { MDBRow, MDBContainer } from "mdbreact";
import heartrate from './../images/heartrate.png';
import heartrate_left from './../images/heartrate_for_left_white.png';
import heartrate_right from './../images/heartrate_for_right_white.png';
import  './../css/carousel2.css';
var marginauto={margin:'auto'}
//import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
 //} from "mdbreact";
 

const ShopByHealth = () => {
  return (
    <div className="blue-gradient h-500 " className="py-1" style={{backgroundImage:'linear-gradient(to right, #80ccf2, #4b7dbd)'}}>
      
      <MDBRow className="justify-content-center  py-2">
<h3 style={{color:'white'}} className="fhshrink"><img src={heartrate_left} className="imgshrink"></img> <b>Shop By Health Concerns</b> <img src={heartrate_right} className="imgshrink"></img></h3>
    </MDBRow>
    <MDBRow>
        <OwlCarousel
        className="owl-theme px-5"
        loop
        dots={false}
       
        nav={true}
        autoplay={true}
        autoplayHoverPause={true}
        items={5}
    >
       
         <div class="item"><img  className="fixed_img2 h-100" style={marginauto} src={icon_white_affordable}  alt="1"/></div>
         <div class="item"><img  className="fixed_img2 h-100" style={marginauto}  src={icon_white_cardiac} alt="2"/></div>
         <div class="item"><img  className="fixed_img2 h-100" style={marginauto} src={icon_white_diabetes} alt="3"/></div>
         <div class="item"><img   className="fixed_img2 h-100" style={marginauto} src={icon_white_eye} alt="4"/></div>
               <div class="item"><img   className="fixed_img2 h-100" style={marginauto} src={icon_white_jointpain} alt="5"/></div>
               <div class="item"><img   className="fixed_img2 h-100" style={marginauto} src={icon_white_kidney} alt="6"/></div>
         <div class="item"><img  className="fixed_img2 h-100" style={marginauto} src={icon_white_liver} alt="7"/></div>
         <div class="item"><img  className="fixed_img2 h-100" style={marginauto} src={icon_white_personal} alt="8"/></div>
         <div class="item"><img  className="fixed_img2 h-100" style={marginauto} src={icon_white_reliable} alt="9"/></div>
               <div class="item"><img  className="fixed_img2 h-100" style={marginauto} src={icon_white_secure} alt="10"/></div>
               <div class="item"><img className="fixed_img2 h-100" style={marginauto} src={icon_white_stomach} alt="11"/></div>
    </OwlCarousel>
   
    </MDBRow> 
   
    </div>
  );
}

export default ShopByHealth;