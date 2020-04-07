import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBBtn,MDBCol } from "mdbreact";
import heartrate from './../images/heartrate.png';
import specialist_bg from './../images/specialist_bg.png';
import heartrate_left from './../images/heartrate_for_left.png';
import heartrate_right from './../images/heartrate_for_right.png';
const Specialists= () => {
return (
    <div  style={{
        backgroundImage: "url(" +specialist_bg+ ")",
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'}} className="mb-5 pl-3 pr-3"
        >

<MDBRow className="justify-content-center py-1">
<h3 className="id1 text-center py-1 fhshrink" style={{color: '#4f4646'}}><img src={heartrate_left} className="imgshrink"></img><b>Specialists</b><img src={heartrate_right} className="imgshrink"></img></h3>   </MDBRow>  
  <p style={{color:'#3a484f'}}><b> We have lots of specialist who can help you to improve your health. As you can see below you can direct chat with them.</b></p>
    <MDBRow className="justify-content-center mb-4">
        <MDBCol lg="1" md="0" sm="0"></MDBCol>
        <MDBCol lg="10" md="12" sm="12" className="stylebuttoncoll" > 
        <MDBBtn rounded outline color="gray btn-sm" className=" stylebuttonl border border-gray px-2  ">Sexiologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl"  >Gynaecologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl"  >Joint Specialist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Ear</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Nose</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl"  >Throat</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Skin</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl"  >Hair Specialist</MDBBtn>
    </MDBCol>
        <MDBCol lg="1" md="0" sm="0"></MDBCol>
   </MDBRow>
    <MDBRow className="justify-content-center mb-4">
    <MDBCol lg="2" md="0" sm="0"></MDBCol>
        <MDBCol lg="8" md="12" sm="12" className="stylebuttoncoll" > 
        <MDBBtn rounded outline color="gray btn-sm " className="border border-gray px-2 stylebuttonl" >Physiotherapist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl">Pathologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Diabets Specialist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Psychologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Dentist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl">Dietician</MDBBtn>
    
    </MDBCol>
        <MDBCol lg="2" md="0" sm="0"></MDBCol>
    </MDBRow>
    <MDBRow className="justify-content-center mb-4">
    <MDBCol lg="3" md="1" sm="0"></MDBCol>
        <MDBCol lg="6" md="10" sm="12" className="stylebuttoncoll" > 
        <MDBBtn rounded outline color="gray btn-sm " className="border border-gray px-2 stylebuttonl" >Urologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Homeopathy</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >Ayurveda</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl">Diabets Specialist</MDBBtn>
   
    </MDBCol>
        <MDBCol lg="3" md="1" sm="0"></MDBCol>

    </MDBRow>
    <MDBRow className="justify-content-center mb-4">
    <MDBCol lg="4" md="2" sm="0"></MDBCol>
        <MDBCol lg="4" md="8" sm="12" className="stylebuttoncoll"> 
        <MDBBtn rounded outline color="gray btn-sm " className="border border-gray px-2 stylebuttonl" >Neurologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl" >General Physician</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2 stylebuttonl"  >Psychiatrist</MDBBtn>
   
    </MDBCol>
        <MDBCol lg="4" md="2" sm="0"></MDBCol>


    </MDBRow>
 
 </div>
);
};

export default Specialists;