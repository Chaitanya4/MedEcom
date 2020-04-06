import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn, MDBContainer } from "mdbreact";
import icon_new_arrival from './../images/icon_new_arrivals.png';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
import sale from './../images/sale.jpg';
import { Link } from "react-router-dom"; 
const rowpad = {
  marginLeft:0,
  marginRight:0,
  justifyContent: 'center'

};

const shadow={
  boxShadow:'none'
}
const NewArrival = () => {
  return (
    <section className="text-center my-5">
    <MDBRow className="pl-0 " style={{backgroundImage: "linear-gradient(to right,rgb(253, 251, 150),rgb(252, 250, 244)"}}>
    <MDBCol className="d-flex justify-content-center justify-content-lg-start align-items-center" lg="5" md="12" sm="12"><h3 className="pl-4 pr-4 prcardheading">  
<img src={icon_new_arrival} alt="new_a rrivals"/>New Arrival</h3></MDBCol>   
  
    <MDBCol lg="4" md="0" sm="0"></MDBCol>
   <MDBCol className="d-flex justify-content-center justify-content-lg-end align-items-center" lg="3" md="12" sm="12"> <MDBBtn color="primary pull-right viewallbtn cbtn" >View All</MDBBtn>
    <MDBBtn color="primary pull-right viewallbtn" >&lt;</MDBBtn>
    <MDBBtn color="primary pull-right viewallbtn" >&gt;</MDBBtn></MDBCol>
    
    
     </MDBRow>
     <MDBRow className="mt-4 ml-3 mr-3" style={{justifyContent:'center'}}>
        <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-2rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3">
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
              <img className="mx-auto my-2" src={zandu} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">bottle of 90 tablets</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-2rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
               <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Sugar free Natural Powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">Liquid</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-2rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-2rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6" className="px-1 pb-3">
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
              <img className="mx-auto my-2" src={zandu} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">bottle of 90 tablets</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-2rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6" className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
               <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Sugar free Natural Powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">Liquid</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-2rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
       
        </MDBRow>
       
          </section>
  );
}

export default NewArrival;