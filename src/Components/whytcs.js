import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBContainer,MDBBadge, MDBBtn } from "mdbreact";
import heartrate from './../images/heartrate.png';
import icon_beauty from './../images/icon_beauty.png';
import icon_certified_doctors from './../images/icon_certified_doctors.png';
import icon_confidential from './../images/icon_confidential.png';
import icon_convenience from './../images/icon_convenience.png';
import icon_cost_effective from './../images/icon_cost_effective.png';
const WhyTCS = () => {
  return (
    <section className="text-center my-5">
 <MDBRow className="justify-content-center mb-1">
<h3 ><img src={heartrate}></img> Why to Choose Us <img src={heartrate}></img></h3>
    </MDBRow>
    
      <MDBRow className="mt-4 ml-0 mr-0">
        <MDBCol lg="3" md="6" className=" mb-lg-0 mb-4">
          <MDBCard className="h-100  align-items-center border border-white">
              <MDBRow> <img className="mb-3" src={icon_confidential} alt="confidential"/></MDBRow>
           <MDBRow >
               <MDBCol lg="12" md="12" sm="12" xs="12"> <h6 className="pl-4 pr-4" >100% Confidential</h6></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4">All advices &amp; consultations are completely confidential. You can also delete chats if you want.</p></MDBCol>
              
              
           </MDBRow>
           
             </MDBCard>
        </MDBCol>
        
        <MDBCol lg="3" md="6" className="   mb-lg-0 mb-4">
          <MDBCard className="h-100 align-items-center border border-white">
          <MDBRow> <img className="mb-3" src={icon_certified_doctors} alt="confidential"/></MDBRow>
           <MDBRow >
               <MDBCol lg="12" md="12" sm="12" xs="12"> <h6 className="pl-4 pr-4" >Certified Doctors</h6></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4">All advices &amp; consultations are completely confidential. You can also delete chats if you want.</p></MDBCol>
              
              
           </MDBRow>
           
             </MDBCard>
        </MDBCol>
         
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="h-100 align-items-center border border-white">
          <MDBRow > <img  className="mb-3" src={icon_convenience} alt="confidential"/></MDBRow>
         
           <MDBRow >
               <MDBCol lg="12" md="12" sm="12" xs="12"> <h6 className="pl-4 pr-4" >Convenience</h6></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4">All advices &amp; consultations are completely confidential. You can also delete chats if you want.</p></MDBCol>
              
              
           </MDBRow>
             </MDBCard>
        </MDBCol>
         
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="h-100 align-items-center border border-white">
          <MDBRow > <img className="mb-3" src={icon_cost_effective} alt="confidential"/></MDBRow>
         
           <MDBRow >
               <MDBCol lg="12" md="12" sm="12" xs="12"> <h6 className="pl-4 pr-4" >Cost Effective</h6></MDBCol>
               <MDBCol lg="12" md="12" sm="12" xs="12"> <p className="pl-4 pr-4">All advices &amp; consultations are completely confidential. You can also delete chats if you want.</p></MDBCol>
              
              
           </MDBRow>
             </MDBCard>
        </MDBCol>
        </MDBRow>
     
    </section>
  );
}

export default WhyTCS;