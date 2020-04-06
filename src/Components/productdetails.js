import React from "react";
import { MDBCol,MDBIcon, MDBCard, MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn, MDBRow, MDBFooter, MDBContainer } from "mdbreact";
import ProductInfo from './productinfo';

import icon_white_reliable from './../images/icon_white_reliable.png';
import icon_white_secure from './../images/icon_white_secure.png';
import icon_white_affordable from './../images/icon_white_affordable.png';
import daburch from './../images/daburch.jpeg';
import './../css/removecolor.css';
var bstyle={
    display: "flex",
    flexwrap: "wrap",
    marginRight: 0,
    marginLeft: -15};

var cdstyle={border:"dotted 1px green"};
const ProductDetails = () => {
  return (
    <MDBContainer>
<MDBRow className="mt-5" >

<MDBCol lg="9" md="9" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100 border gray mt-4 ml-3">
  
  
       <ProductInfo/> 
 
  
  </MDBCard>
</MDBCol>
<MDBCol lg="3" md="3" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100 mt-4 ml-1" style={cdstyle}>
  <MDBRow className="h-20 mr-0 ml-0" style={{backgroundColor:"#23db23"}}><p style={{color:"white"}} className="pl-5 pb-0">Additional Discount</p></MDBRow>
   <MDBRow className="h-80 mr-0 ml-0 ">
     <MDBCard className=" mr-0 ml-0 border border-gray m-2">
       <MDBRow>
         <MDBCol lg="4" md="4" sm="4" xs="4"><img className="mx-auto mt-2" src={daburch} alt="dabur" style={{width:80,height:80}}/></MDBCol>
         <MDBCol lg="8" md="8" sm="8" xs="8">
          <MDBRow><h3 style={{color:"black",fontSize:25}}><b>Pack of 2</b></h3></MDBRow>
          <MDBRow>
            <MDBCol lg="6" md="6" sm="6" xs="6"><p style={{color:"gray",fontSize:10}}>MRP 900</p>
            <h6 style={{color:"black",fontSize:18}}>₹ 198</h6>
            </MDBCol>
            <MDBCol lg="6" md="6" sm="6" xs="6">
            <MDBBtn color="primary btn-sm px-2 py-2 ml-0" >BUY PACK</MDBBtn>

            </MDBCol>
          </MDBRow>
         </MDBCol>
       </MDBRow>
     </MDBCard>
     </MDBRow>
     <MDBRow className="h-80 mr-0 ml-0 ">
     <MDBCard className=" mr-0 ml-0 border border-gray m-2">
       <MDBRow>
         <MDBCol lg="4" md="4" sm="4" xs="4"><img className="mx-auto mt-2" src={daburch} alt="dabur" style={{width:80,height:80}}/></MDBCol>
         <MDBCol lg="8" md="8" sm="8" xs="8">
          <MDBRow><h3 style={{color:"black",fontSize:25}}><b>Pack of 2</b></h3></MDBRow>
          <MDBRow>
            <MDBCol lg="6" md="6" sm="6" xs="6"><p style={{color:"gray",fontSize:10}}>MRP 900</p>
            <h6 style={{color:"black",fontSize:18}}>₹ 198</h6>
            </MDBCol>
            <MDBCol lg="6" md="6" sm="6" xs="6">
            <MDBBtn color="primary btn-sm px-2 py-2 ml-0" >BUY PACK</MDBBtn>

            </MDBCol>
          </MDBRow>
         </MDBCol>
       </MDBRow>
     </MDBCard>
     </MDBRow>
     <MDBRow className="h-80 mr-0 ml-0 ">
     <MDBCard className=" mr-0 ml-0 border border-gray m-2">
       <MDBRow>
         <MDBCol lg="4" md="4" sm="4" xs="4"><img className="mx-auto mt-2" src={daburch} alt="dabur" style={{width:80,height:80}}/></MDBCol>
         <MDBCol lg="8" md="8" sm="8" xs="8">
          <MDBRow><h3 style={{color:"black",fontSize:25}}><b>Pack of 2</b></h3></MDBRow>
          <MDBRow>
            <MDBCol lg="6" md="6" sm="6" xs="6"><p style={{color:"gray",fontSize:10}}>MRP 900</p>
            <h6 style={{color:"black",fontSize:18}}>₹ 198</h6>
            </MDBCol>
            <MDBCol lg="6" md="6" sm="6" xs="6">
            <MDBBtn color="primary btn-sm px-2 py-2 ml-0" >BUY PACK</MDBBtn>

            </MDBCol>
          </MDBRow>
         </MDBCol>
       </MDBRow>
     </MDBCard>
     </MDBRow>
     <MDBRow className="h-80 mr-0 ml-0 ">
     <MDBCard className=" mr-0 ml-0 border border-gray m-2">
       <MDBRow>
         <MDBCol lg="4" md="4" sm="4" xs="4"><img className="mx-auto mt-2" src={daburch} alt="dabur" style={{width:80,height:80}}/></MDBCol>
         <MDBCol lg="8" md="8" sm="8" xs="8">
          <MDBRow><h3 style={{color:"black",fontSize:25}}><b>Pack of 2</b></h3></MDBRow>
          <MDBRow>
            <MDBCol lg="6" md="6" sm="6" xs="6"><p style={{color:"gray",fontSize:10}}>MRP 900</p>
            <h6 style={{color:"black",fontSize:18}}>₹ 198</h6>
            </MDBCol>
            <MDBCol lg="6" md="6" sm="6" xs="6">
            <MDBBtn color="primary btn-sm px-2 py-2 ml-0" >BUY PACK</MDBBtn>

            </MDBCol>
          </MDBRow>
         </MDBCol>
       </MDBRow>
     </MDBCard>
     </MDBRow>
   
  </MDBCard>
</MDBCol>
</MDBRow>
</MDBContainer>
  );
}

export default ProductDetails;