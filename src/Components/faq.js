import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import heartrate from './../images/heartrate.png';
const Faq= () => {
return (
  <div>
<MDBRow className="justify-content-center mb-4">
<h3 ><img src={heartrate}></img> Frequently Asked Questions <img src={heartrate}></img></h3>
    </MDBRow>  
  <MDBListGroup style={{ width: "100%" }}>
    <MDBListGroupItem className="border-white">
    <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><h6><b>When will I get an answer to my query? What happens if I don't get a response?</b></h6>
    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:12, wordSpacing:0.2}}>If you opt for a free consult, then make sure the doctor replies wwithin 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</p></MDBCol>
    
    
    </MDBRow>
    
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white"> <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><h6><b>When will I get an answer to my query? What happens if I don't get a response?</b></h6>
    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:12, wordSpacing:0.2}}>If you opt for a free consult, then make sure the doctor replies wwithin 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</p></MDBCol>
    
    
    </MDBRow>
   
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white"> <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><h6><b>When will I get an answer to my query? What happens if I don't get a response?</b></h6>
    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:12, wordSpacing:0.2}}>If you opt for a free consult, then make sure the doctor replies wwithin 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</p></MDBCol>
    
    
    </MDBRow>
   
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white">  <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><h6><b>When will I get an answer to my query? What happens if I don't get a response?</b></h6>
    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:12, wordSpacing:0.2}}>If you opt for a free consult, then make sure the doctor replies wwithin 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</p></MDBCol>
    
    
    </MDBRow>
   
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white"> <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><h6><b>When will I get an answer to my query? What happens if I don't get a response?</b></h6>
    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:12, wordSpacing:0.2}}>If you opt for a free consult, then make sure the doctor replies wwithin 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</p></MDBCol>
    
    
    </MDBRow>
   
    </MDBListGroupItem>
  </MDBListGroup>


  </div>


);
};

export default Faq;