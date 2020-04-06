import React from "react";
import {  MDBRow, MDBCol, MDBCard,MDBContainer,MDBIcon, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";
import icon_new_arrival from './../images/icon_new_arrivals.png';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
import sale from './../images/sale.jpg';
import bg_beauty_grooming from './../images/bg_beauty_grooming.png';
import icon_beauty from './../images/icon_beauty.png';
const BeautyGroom = () => {
  return (
    <section className="text-center my-5">
        
        <MDBRow className="pl-0 " style={{backgroundImage:  "url(" +bg_beauty_grooming+ ")", backgroundColor:"rgb(203, 236, 233)"}}> 
        <MDBCol style={{alignItems: "center",justifyContent:"flex-start",
display: "flex"
}}    lg="5" md="12" sm="12"><h3 className="pl-4 pr-4 prcardheading">  
<img src={icon_beauty} alt="new_a rrivals"/>Beauty &amp; Grooming</h3></MDBCol>   
  
    <MDBCol lg="4" md="0" sm="0"></MDBCol>
   <MDBCol style={{alignItems: "center",justifyContent:"flex-end",
display: "flex"
}} lg="3" md="12" sm="12"> <MDBBtn color="primary pull-right viewallbtn cbtn" >View All</MDBBtn>
    <MDBBtn color="primary pull-right viewallbtn" >&lt;</MDBBtn>
    <MDBBtn color="primary pull-right viewallbtn" >&gt;</MDBBtn></MDBCol>
    
    
     </MDBRow>
    
    
      <MDBRow className="mt-4 ml-0 mr-0">
      <MDBCol lg="2" md="4" sm="6" className="mb-lg-0 mb-4 pr-2 pl-2">
      <MDBCard className=" border border-gray" >
   
           <MDBRow >
           <MDBBadge color="primary" style={{height:"1rem"}}>New</MDBBadge>
               <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
            </MDBRow>
              
                   <MDBRow 
className=" "><p className="producthead  pl-2 ml-2">Ensure diabetes care powder</p></MDBRow>
                   <MDBRow className="text-center proddescribe pl-2"><p>box of 90gm powder</p></MDBRow>
               
          
                   <MDBRow>
                      
                     <MDBCol>

                     <p className="mb-4 ml-0 mr-3 mb-0 mt-0 pl-1 prodprice" >₹31</p>
                   
                     
              
                     </MDBCol>
                   <MDBCol>  <MDBBtn color="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 mb-4 addbtn" rounded>Add</MDBBtn></MDBCol>
            
           </MDBRow>
          </MDBCard>
       
        
        </MDBCol>
      
        <MDBCol lg="2" md="4" sm="6" className="mb-lg-0 mb-4 pr-2 pl-2">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
            
               <img className="mx-auto my-2" src={zandu} style={{height:110,width:80}} alt="zandu"></img>
            </MDBRow>
              
                   <MDBRow 
className=" "><p className="producthead  pl-2 ml-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                    <MDBRow className="text-center proddescribe pl-2"><p>bottle of 90 tablets</p></MDBRow>
               
          
                   <MDBRow  >
              <p className="mb-4 ml-0 mr-3 pl-1 prodprice" >₹198</p>
              <MDBBtn color="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 mb-4 addbtn" rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
       
      
       
        
        </MDBCol>
      
        
        <MDBCol lg="2" md="4" sm="6" className="mb-lg-0 mb-4 pr-2 pl-2">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
            
               <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
            </MDBRow>
              
                   <MDBRow 
className=" "><p className="producthead  pl-2 ml-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                    <MDBRow className="text-center proddescribe pl-2"><p>bottle of 90 tablets</p></MDBRow>
               
          
                   <MDBRow  >
              <p className="mb-4 ml-0 mr-3 pl-1 prodprice" >₹198</p>
              <MDBBtn color="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 mb-4 addbtn" rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
       
      
        
        </MDBCol>
      
      <MDBCol lg="2" md="4" sm="6" className="mb-lg-0 mb-4 pr-2 pl-2">
      <MDBCard className="align-items-center border border-gray">
           <MDBRow >
            
               <img className="mx-auto my-2" src={zandu} style={{height:110,width:80}} alt="zandu"></img>
            </MDBRow>
              
                   <MDBRow 
className=" "><p className="producthead  pl-2 ml-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                     <MDBRow className="text-center proddescribe pl-2"><p>bottle of 90 tablets</p></MDBRow>
               
          
                   <MDBRow  >
              <p className="mb-4 ml-0 mr-3 pl-1 prodprice" >₹198</p>
              <MDBBtn color="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 mb-4 addbtn" rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
       
      
       
        
        </MDBCol>
      
        <MDBCol lg="2" md="4" sm="6" className="mb-lg-0 mb-4 pr-2 pl-2">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
            
               <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
            </MDBRow>
              
                   <MDBRow 
className=" "><p className="producthead  pl-2 ml-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                   <MDBRow className="text-center proddescribe pl-2"><p>bottle of 90 tablets</p></MDBRow>
               
          
                   <MDBRow  >
              <p className="mb-4 ml-0 mr-3 pl-1 prodprice" >₹198</p>
              <MDBBtn color="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 mb-4 addbtn" rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
       
      
       
        
        </MDBCol>

        <MDBCol lg="2" md="4" sm="6" className="mb-lg-0 mb-4 pr-2 pl-2">
        <MDBCard className="align-items-center border border-gray">
           <MDBRow >
            
               <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
            </MDBRow>
              
                   <MDBRow 
className=" "><p className="producthead  pl-2 ml-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                    <MDBRow className="text-center proddescribe pl-2"><p>bottle of 90 tablets</p></MDBRow>
               
          
                   <MDBRow  >
              <p className="mb-4 ml-0 mr-3 pl-1 prodprice" >₹198</p>
              <MDBBtn color="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 mb-4 addbtn" rounded>Add</MDBBtn>
           </MDBRow>
          </MDBCard>
       
       </MDBCol>
      
      </MDBRow>
     
    </section>
  );
}

export default BeautyGroom;