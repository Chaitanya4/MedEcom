import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBContainer,MDBBadge, MDBBtn } from "mdbreact";
import icon_new_arrival from './../images/icon_new_arrivals.png';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
import sale from './../images/sale.jpg';
const SimilarProducts = () => {
  return (
    <section className="text-center my-5">
    <MDBRow className="pl-0 "> <MDBCol style={{alignItems: "center",justifyContent:"center",
display: "flex"
}}  lg="4" md="12" sm="12"><h3 className=" text-center">Similar Products</h3></MDBCol>   
    <MDBCol lg="2" md="0" sm="0"></MDBCol>
   <MDBCol style={{alignItems: "center",justifyContent:"center",
display: "flex"
}} lg="6" md="12" sm="12"> <p>More than 150 products available</p><MDBBtn color="primary btn-sm pull-right" >View All</MDBBtn>
    <MDBBtn color="primary btn-sm pull-right" >&lt;</MDBBtn>
    <MDBBtn color="primary btn-sm pull-right" >&gt;</MDBBtn></MDBCol>
   
    
     </MDBRow>
     <MDBContainer>
      <MDBRow className="mt-4 ml-0 mr-0">
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center border border-gray">
            
           <MDBRow >
               <MDBCol className="border-bottom border-gray">
                 
               <i class="fas fa-prescription-bottle-alt fa-3x pt-4"></i>
               </MDBCol>
               <MDBCol className="border-bottom border-gray">
                   <MDBRow 
className="border-bottom border-left border-gray  mr-0 ml-0"><p>Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                   <MDBRow className="  border-left border-gray mr-0 ml-0 "><p>Liquid</p></MDBRow>
               </MDBCol>
           </MDBRow>
           <MDBRow>
           <p>₹ 198</p><MDBBtn className="btn-sm px-2 py-1 mt-1 mb-4 ml-5" color="primary" outline rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
               <MDBCol className=" border-bottom border-gray" style={{
        backgroundImage: "url(" +sale+ ")",
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundSize:30
      }} >
              <img className="mx-auto my-2" src={zandu} style={{height:110,width:80, overflowX:"true",overflowY:"true"}} alt="zandu"></img>
               </MDBCol>
               <MDBCol className="border-bottom border-gray">
                   <MDBRow className="border-bottom border-left border-gray"><p>Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                   <MDBRow  className="  border-left border-gray"><p>Liquid</p></MDBRow>
               </MDBCol>
           </MDBRow>
           <MDBRow>
          <p>₹ 198</p>
          <MDBBtn className="btn-sm px-2 py-1 mt-1 mb-4 ml-5" color="primary" outline rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
               <MDBCol className="border-bottom border-gray">
               <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
               </MDBCol>
               <MDBCol className="border-bottom border-gray">
                   <MDBRow className="border-bottom border-left border-gray"><p>Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                   <MDBRow  className="  border-left border-gray"><p>Liquid</p></MDBRow>
               </MDBCol>
           </MDBRow>
           <MDBRow>
          <p>₹ 198</p>
          <MDBBtn className="btn-sm px-2 py-1 mt-1 mb-4 ml-5" color="primary" outline rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
               <MDBCol  className="border-bottom border-gray">
               <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
               </MDBCol>
               <MDBCol className="border-bottom border-gray">
                   <MDBRow  className="border-bottom border-left border-gray"><p>Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                   <MDBRow  className="  border-left border-gray"><p>Liquid</p></MDBRow>
               </MDBCol>
           </MDBRow>
           <MDBRow>
          <p>₹ 198</p>
          <MDBBtn className="btn-sm px-2 py-1 mt-1 mb-4 ml-5" color="primary" outline rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>

    </section>
  );
}

export default SimilarProducts;