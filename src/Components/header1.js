import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBRow,MDBCol,MDBBtn } from
"mdbreact";
import './../css/carousel.css';
import { Link } from "react-router-dom"; 
import './../css/specialcontainer.css';
import banner_bg_jpg from './../images/banner_bg_jpg.jpg';
const pdd="padding-top: 136px;"
const Header1 = () => {
  return (
   <div> 
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
       
      >
        <MDBCarouselInner>
        
          <MDBCarouselItem className="pt-1" itemId="1">
            <MDBView> 
            {/* style={{backgroundImage: "url(" +banner_bg_jpg+ ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:"300px"}} */}
             <MDBRow   style={{
          backgroundImage: "url(" +banner_bg_jpg+ ")",
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height:"500px"
        }}>
               
             
             </MDBRow> 
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem className="pt-1" itemId="2">
          <MDBView>
             <MDBRow  style={{
          backgroundImage: "url(" +banner_bg_jpg+ ")",
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height:"500px"
        }}  >
                
             </MDBRow>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem className="pt-1" itemId="3">
          <MDBView>
             <MDBRow  style={{
          backgroundImage: "url(" +banner_bg_jpg+ ")",
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height:"500px"
        }} >
                 
             </MDBRow>
            </MDBView>
          </MDBCarouselItem>
         
        </MDBCarouselInner>
      </MDBCarousel>
     
      </div>
  );
}

export default Header1;