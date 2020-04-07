import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import heartrate from './../images/heartrate.png';
import heartrate_left from './../images/heartrate_for_left.png';
import heartrate_right from './../images/heartrate_for_right.png';
const Faq= () => {
return (
  <div className="pl-3 pr-3 mb-3">
<MDBRow className="justify-content-center mb-0">
<h3 className="id1 text-center py-1 fhshrink" style={{color: '#4f4646'}}><img src={heartrate_left} className="imgshrink"></img><b>Frequently Asked Questions</b><img src={heartrate_right} className="imgshrink"></img></h3>   
    </MDBRow>  
  <MDBListGroup style={{ width: "100%" }}>
    <MDBListGroupItem className="border-white">
    <MDBRow>
    
   <p className=" text-left mb-1" ><b>When will I get an answer to my query? What happens if I don’t get a response?</b></p>
    <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account</p>
  
    
    
    
    </MDBRow>
    
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white">  <MDBRow>
    
    <p className=" text-left mb-1" ><b>Who are the consulting doctors?</b></p>
     <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with 1mg and is given access to answer patient queries.</p>
   
     
     
     
     </MDBRow>
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white"> <MDBRow>
    
    <p className=" text-left mb-1" ><b>Will the doctor be able to resolve my issue?</b></p>
     <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>Our doctors will give you expert advice on your problem and help you identify next steps which may include further tests, medicine recommendation or lifestyle tips. Few cases require face-to-face examination and we do ask patients to share pictures or reports if they can, for a conclusive diagnosis.</p>
   
     
     
     
     </MDBRow>
   
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white">   <MDBRow>
    
    <p className=" text-left mb-1" ><b>Is my consultation private with my doctor?</b></p>
     <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>Privacy of data is one of the fundamental human rights and we at 1mg understand that. All your medical history and online consultation with us are completely private and confidential. We are compliant with industry standards to ensure your consultations are securely stored.</p>
   
     
     
     
     </MDBRow>
   
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white">  <MDBRow>
    
    <p className=" text-left mb-1" ><b>For how long is the consultation valid?</b></p>
     <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>In the case of a paid consult, you can follow-up with your doctor for up to 3 days. In case you opt for a free consult, follow-up questions are valid for one day only.</p>
   
     
     
     
     </MDBRow>
   
    </MDBListGroupItem>
    <MDBListGroupItem className="border-white">  <MDBRow>
    
    <p className=" text-left mb-1" ><b>Do you have a refund policy?</b></p>
     <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>We have a “take-it-easy” policy. If for any reason you’re not convinced with your online consultation, you can write to us at contact@1mgdoctors.com and we will review the consult with the doctor - seeking clarifications on your queries that were answered. 100% refund will be given in genuine cases. </p>
   
     
     
     
     </MDBRow>
   
    </MDBListGroupItem>
  </MDBListGroup>


  </div>


);
};

export default Faq;