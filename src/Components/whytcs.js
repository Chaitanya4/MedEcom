import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBContainer,MDBBadge, MDBBtn } from "mdbreact";
import heartrate from './../images/heartrate.png';
import icon_beauty from './../images/icon_beauty.png';
import icon_certified_doctors from './../images/icon_certified_doctors.png';
import icon_confidential from './../images/icon_confidential.png';
import icon_convenience from './../images/icon_convenience.png';
import icon_cost_effective from './../images/icon_cost_effective.png';
import heartrate_left from './../images/heartrate_for_left.png';
import heartrate_right from './../images/heartrate_for_right.png';
const WhyTCS = () => {
  return (
    <section className="text-center my-5 pl-3 pr-3">
 <MDBRow className="justify-content-center mb-1">
 <h3 className="id1 text-center py-1 fhshrink" style={{color: '#4f4646'}}><img src={heartrate_left} className="imgshrink"></img><b>Why to Choose Us</b><img src={heartrate_right} className="imgshrink"></img></h3>   
    </MDBRow>
    
      <MDBRow className="mt-4 ml-0 mr-0">
        <MDBCol lg="3" md="6" className=" mb-lg-0 mb-4">
          <MDBCard className="h-100  align-items-center border border-white">
              <MDBRow> <img className="mb-3" src={icon_confidential} alt="confidential"/></MDBRow>
           <MDBRow >
               <MDBCol lg="12" md="12" sm="12" xs="12"> <h5 className="pl-4 pr-4 " ><b>100% Confidential</b></h5></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4 blue-grey-text">All advices &amp; consultations are completely confidential. You can also delete chats if you want.</p></MDBCol>
              
              
           </MDBRow>
           
             </MDBCard>
        </MDBCol>
        
        <MDBCol lg="3" md="6" className="   mb-lg-0 mb-4">
          <MDBCard className="h-100 align-items-center border border-white">
          <MDBRow> <img className="mb-3" src={icon_certified_doctors} alt="confidential"/></MDBRow>
           <MDBRow >
           <MDBCol lg="12" md="12" sm="12" xs="12"> <h5 className="pl-4 pr-4 " ><b>Certified Doctors</b></h5></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4 blue-grey-text">We offer quality healthcare through our network of certified and experienced doctors.</p></MDBCol>
              
              
           </MDBRow>
           
             </MDBCard>
        </MDBCol>
         
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="h-100 align-items-center border border-white">
          <MDBRow > <img  className="mb-3" src={icon_convenience} alt="confidential"/></MDBRow>
         
           <MDBRow >
           <MDBCol lg="12" md="12" sm="12" xs="12"> <h5 className="pl-4 pr-4 " ><b>Convenience</b></h5></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4 blue-grey-text">Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere.</p></MDBCol>
              
              
           </MDBRow>
             </MDBCard>
        </MDBCol>
         
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="h-100 align-items-center border border-white">
          <MDBRow > <img className="mb-3" src={icon_cost_effective} alt="confidential"/></MDBRow>
         
           <MDBRow >
           <MDBCol lg="12" md="12" sm="12" xs="12"> <h5 className="pl-4 pr-4 " ><b>Cost Effective</b></h5></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4 blue-grey-text">We provide medical assistance on non urgent queries for free. Fee starting at ₹50 for faster response to queries.</p></MDBCol>
              
              
           </MDBRow>
             </MDBCard>
        </MDBCol>
        </MDBRow>
     
    </section>
  );
}

export default WhyTCS;