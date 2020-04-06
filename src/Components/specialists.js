import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBBtn,MDBCol } from "mdbreact";
import heartrate from './../images/heartrate.png';
import specialist_bg from './../images/specialist_bg.png';
const Specialists= () => {
return (
    <div  style={{
        backgroundImage: "url(" +specialist_bg+ ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} className="mb-5"
        >
<MDBContainer className="mb-5">
<MDBRow className="justify-content-center mb-4">
<h3 ><img src={heartrate}></img> Specialists <img src={heartrate}></img></h3>
    </MDBRow>  
    <MDBRow className="justify-content-center mb-4">
        <MDBCol lg="2" md="0" sm="0"></MDBCol>
        <MDBCol lg="8" md="12" sm="12"> 
        <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Sexiologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Gynaecologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Joint Specialist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Ear</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Nose</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Throat</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Skin</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Hair Specialist</MDBBtn>
    </MDBCol>
        <MDBCol lg="2" md="0" sm="0"></MDBCol>
   </MDBRow>
    <MDBRow className="justify-content-center mb-4">
    <MDBCol lg="2" md="0" sm="0"></MDBCol>
        <MDBCol lg="8" md="12" sm="12"> 
        <MDBBtn rounded outline color="gray btn-sm " className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Physiotherapist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Pathologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Diabets Specialist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Psychologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Dentist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Dietician</MDBBtn>
    
    </MDBCol>
        <MDBCol lg="2" md="0" sm="0"></MDBCol>
    </MDBRow>
    <MDBRow className="justify-content-center mb-4">
    <MDBCol lg="3" md="2" sm="0"></MDBCol>
        <MDBCol lg="6" md="8" sm="12"> 
        <MDBBtn rounded outline color="gray btn-sm " className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Urologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Homeopathy</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Ayurveda</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Diabets Specialist</MDBBtn>
   
    </MDBCol>
        <MDBCol lg="3" md="2" sm="0"></MDBCol>

    </MDBRow>
    <MDBRow className="justify-content-center mb-4">
    <MDBCol lg="3" md="2" sm="0"></MDBCol>
        <MDBCol lg="6" md="8" sm="12"> 
        <MDBBtn rounded outline color="gray btn-sm " className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Neurologist</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>General Physician</MDBBtn>
    <MDBBtn rounded outline color="gray btn-sm" className="border border-gray px-2" style={{boxShadow:"none",color:"gray"}}>Psychiatrist</MDBBtn>
   
    </MDBCol>
        <MDBCol lg="3" md="2" sm="0"></MDBCol>


    </MDBRow>
 </MDBContainer>
 </div>
);
};

export default Specialists;