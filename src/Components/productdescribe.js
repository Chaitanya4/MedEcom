
import React from "react";
import { MDBCol,MDBIcon, MDBCard, MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn, MDBRow, MDBFooter, MDBContainer } from "mdbreact";

import icon_white_reliable from './../images/icon_white_reliable.png';
import icon_white_secure from './../images/icon_white_secure.png';
import icon_white_affordable from './../images/icon_white_affordable.png';
import daburch from './../images/daburch.jpeg';
import './../css/removecolor.css';
var bstyle={
    display: "flex",
    flexwrap: "wrap",
    marginRight: 0,
    marginLeft: 0};

var cdstyle={border:"dotted 1px green"};
const ProductDescribe = () => {
  return (
    <MDBContainer>
<MDBRow >
<MDBCol lg="4" md="12" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100  mt-4  ml-1 " style={{boxShadow:"none",border:"none"}} >
    
    <MDBRow className="h-75 border gray mb-1 " style={bstyle}><img className="mx-auto" src={daburch} alt="dabur" /></MDBRow>
    <MDBRow className="h-25"  style={bstyle}>
        <MDBCol className="h-100 border gray mr-1"><img className="mx-auto " src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100 border gray mr-1"><img className="mx-auto" src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100 border gray mr-1"><img className="mx-auto" src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100 border gray mr-1" ><img className="mx-auto" src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
    </MDBRow>
  </MDBCard>
</MDBCol>
<MDBCol lg="5" md="12" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100 border gray mt-4 ml-1">
  <MDBRow className="h-75 ml-3 mt-1">
    <MDBCol lg="12" md="12" sm="12" xs="12">  <h5  style={{fontSize:20}} >Dabur Chyawanprakash Sugarfree</h5></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"><p  style={{fontSize:10}}>15 Jan 2020</p></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"><p  style={{fontSize:10}}><b>Manufacturer</b> Dabur India Ltd.</p></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"><p  style={{fontSize:10}}> <MDBBtn color="warning btn-sm px-1 py-0">4.4</MDBBtn>371 brought this</p></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"> <p style={{fontSize:10}}>  <MDBBtn color="warning btn-sm px-1 py-0">best Seller</MDBBtn><b>In Health Product</b></p></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:10}}><b>Quantity</b> </p></MDBCol>
   <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:10}}><MDBBtn color="blue-grey btn-sm px-2 py-2">250gm</MDBBtn>₹ 120</p> </MDBCol>
   <MDBCol  lg="12" md="12" sm="12" xs="12"><p  style={{fontSize:10}}><MDBBtn color="white btn-sm px-2 py-2">500gm</MDBBtn> ₹ 228  <MDBBtn color="danger btn-sm px-1 py-0 mr-5">5% off</MDBBtn> <MDBBtn color="primary btn-sm px-2 py-2 ml-5" >ADD</MDBBtn></p>  </MDBCol>
   <MDBCol  lg="12" md="12" sm="12" xs="12"><p  style={{fontSize:10}}><MDBBtn color="primary btn-sm px-2 py-2">900gm</MDBBtn> ₹ 405  <MDBBtn color="danger btn-sm px-1 py-0 mr-5">10%off</MDBBtn> <MDBBtn color="primary btn-sm px-2 py-2 ml-5" >ADD</MDBBtn></p></MDBCol>
 
  
      
      

     
      
    
    
     
      
    
     
     
     
   </MDBRow>
   <MDBRow className="h-25 border-top gray ml-0 mr-0">
     <MDBCol  lg="5" md="5" sm="5" xs="5" className=" ml-3"> <MDBRow><p>Total </p></MDBRow>
     
     <MDBRow><p><b>₹ 228</b></p></MDBRow></MDBCol>
     <MDBCol   lg="5" md="5" sm="5" xs="5" className=" mt-2 mb-2 ml-5" > <MDBBtn color="primary btn-md">Add To Cart</MDBBtn></MDBCol>
    
     
     </MDBRow>
  </MDBCard>
</MDBCol>
<MDBCol lg="3" md="12" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100 mt-4 ml-1" style={cdstyle}>
   <MDBRow className="h-20 mr-0 ml-0" style={{backgroundColor:"#23db23"}}><p style={{color:"white"}} className="pl-5 pb-0">Additional Offers</p></MDBRow>
   <MDBRow className="h-80 mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0"><b>Amazon Pay:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
   <MDBRow className="h-80 mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0"><b>PayPal:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
   <MDBRow className="h-80 mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0"><b>Special Offer:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
   <MDBRow className="h-80 mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0"><b>Ola Money Postpaid:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
  </MDBCard>
</MDBCol>
</MDBRow>
</MDBContainer>
  );
}

export default ProductDescribe;