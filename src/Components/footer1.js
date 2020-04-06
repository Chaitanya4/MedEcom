import React from "react";
import { MDBCol,MDBIcon, MDBCard, MDBCardImage,MDBCardBody,MDBContainer,MDBCardTitle,MDBCardText,MDBBtn, MDBRow, MDBFooter } from "mdbreact";
import footer_bg_jpg from './../images/footer_bg_jpg.jpg';
import icon_white_reliable from './../images/icon_white_reliable.png';
import icon_white_secure from './../images/icon_white_secure.png';
import icon_white_affordable from './../images/icon_white_affordable.png';
import footer_heatrate from './../images/footer_heatrate.png';
import './../css/removecolor.css';
const Footer1 = () => {
  return (
    <MDBFooter style={{
      backgroundImage: "url(" +footer_bg_jpg+ ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      webkitbackgroundSize:'cover',
      mozbackgroundSize:'cover',
      obackgroundSize:'cover',
     
      backgroundRepeat: 'no-repeat',
     
    }} >
      
        <MDBRow >
        <MDBCol lg="3" md="0" sm="0" className="mb-lg-0 mb-4">
         
        </MDBCol>
        <MDBCol lg="3" md="4" sm="12" className="mb-lg-0 mb-4 ml-2 mr-2 ml-md-0 mr-md-0 ">
          <MDBCard className="align-items-center blue-grey mt-4 mr-2 ml-1">
            <MDBCardImage
              src={icon_white_reliable}
              top
              alt="sample photo"
              
            />
            <MDBCardBody className="text-center ">
            <h3 className=" ftcardheading">Reliable</h3>
             <p className="pl-3 pr-3  ftcardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper fringilla egestas. Morbi convallis sodales metus</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="4" sm="12" className="mb-lg-0 mb-4 ml-2 mr-2 ml-md-0 mr-md-0 ">
          <MDBCard className="align-items-center blue-grey mt-4 mr-2 ml-1">
            <MDBCardImage
              src={icon_white_secure}
              top
              alt="sample photo"
              
            />
            <MDBCardBody className="text-center">
            <h3  className="  ftcardheading">Secure</h3>
             <p className="pl-3 pr-3   ftcardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper fringilla egestas. Morbi convallis sodales metus</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="4" sm="12" className="mb-lg-0 mb-4 ml-2 mr-2 ml-md-0 mr-md-0 ">
          <MDBCard className="align-items-center blue-grey mt-4 mr-2 ml-1">
            <MDBCardImage
              src={icon_white_affordable}
              top
              alt="sample photo"
             
            />
            <MDBCardBody className="text-center">
            <h3  className="  ftcardheading">Affordable</h3>
             <p className="pl-3 pr-3   ftcardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper fringilla egestas. Morbi convallis sodales metus</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4 ">
<MDBCol  lg="3" md="0" sm="0">
     
</MDBCol>
<MDBCol  lg="9" md="12" sm="12">
<MDBRow><MDBCol lg="2"  md="3" sm="12"><h5  className=" mt-2 ftheading ml-0 text-md-left text-center">Know Us</h5></MDBCol>
<MDBCol lg="10" md="9" sm="12" className="text-md-left text-center"><MDBBtn md="3" sm="4"rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20  ">About Us </MDBBtn>
<MDBBtn md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20 ">Contact Us</MDBBtn>
<MDBBtn  md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Press Coverage</MDBBtn>
<MDBBtn md="3" sm="4"rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Business Partnership</MDBBtn>
<MDBBtn  md="3" sm="4" rounded color="blue-grey btn-sm py-1  pl-2 pr-2  border_radious_20">Careers</MDBBtn></MDBCol>


</MDBRow>



      <MDBRow className="mt-4 "><MDBCol lg="2"  md="3" sm="12"><h5  className=" mt-2 ftheading ml-0 text-md-left text-center">Our Policies</h5></MDBCol>
<MDBCol lg="10" md="9" sm="12" className="text-md-left text-center"><MDBBtn md="3" sm="4"rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Privacy Policies </MDBBtn>
<MDBBtn md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Terms &amp; Condition</MDBBtn>
<MDBBtn  md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2  border_radious_20">Editorial Policy</MDBBtn>
<MDBBtn md="3" sm="4"rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Return Policy</MDBBtn>
<MDBBtn  md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">IP Policy</MDBBtn></MDBCol>
</MDBRow>
      <MDBRow className="mt-4">

<MDBCol lg="2"  md="3" sm="12"><h5  className=" mt-2 ftheading ml-0 text-md-left text-center ">Our Services</h5></MDBCol>
<MDBCol lg="10" md="9" sm="12" className="text-md-left text-center"><MDBBtn md="3" sm="4"rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Order Medicines </MDBBtn>
<MDBBtn md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Consult Doctor Online</MDBBtn>
<MDBBtn  md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Ayurved Articles</MDBBtn>
<MDBBtn md="3" sm="4"rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Hindi Articles</MDBBtn>
<MDBBtn  md="3" sm="4" rounded color="blue-grey btn-sm py-1 pl-2 pr-2 border_radious_20">Diabetes Care Plan</MDBBtn></MDBCol>
</MDBRow>
</MDBCol>
</MDBRow>
<MDBRow className="mt-4 ">
    <MDBCol lg="3" md="0" sm="0" ></MDBCol>
    <MDBCol lg="3" md="4" sm="12" className=" justify-content-center justify-content-md-start " style={{display:'grid'}}>
        <MDBRow >
<h6 className="ml-3 mt-3 mr-1 cftheading">Connect On</h6>
        </MDBRow>
        <MDBRow className="mr-4 mb-4" >
        <MDBIcon fab icon="instagram fa-2x ml-3" />
        <MDBIcon fab icon="facebook fa-2x ml-3" />
        <MDBIcon fab icon="twitter fa-2x ml-3" />
        <MDBIcon fab icon="google-plus fa-2x ml-3" />
        </MDBRow>
    </MDBCol>
    <MDBCol lg="3" md="8" sm="12">
<img src={footer_heatrate} style={{width: 500, height: 58}} alt="footer heatrate" />
    </MDBCol>
    <MDBCol lg="1" md="1" sm="0">

    </MDBCol>
</MDBRow>
   
    </MDBFooter>
  );
}

export default Footer1;