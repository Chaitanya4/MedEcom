
import React from "react";
import { MDBCol,MDBIcon, MDBCard, MDBCardImage,MDBBadge,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn, MDBRow, MDBFooter, MDBContainer } from "mdbreact";

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
const borderradius={
    borderRadius: '0.25rem'
}
const shadow={
    boxShadow:'none'
  }
  const reviewradius={
    borderRadius:'0.5rem'
  }
  const inborder={
    border:'1px solid rgb(189, 198, 200)'
  }
  const bgcolor={
    backgroundColor:'#fff0'
  }
  const bnone={
    borderBottom:'none'
  }
var cdstyle={border:"dotted 1px green"};
const DescribeProduct = () => {
  return (
      <div>
          <MDBRow className="ml-0 mr-0">
          <MDBCol lg="9" md="9" sm="12" xs="12" className="d-flex justify-content-md-start justify-content-center"><h6 className="my-2 mx-1"><a className="light-blue-text"><b>Home</b></a></h6>
        <i class="fas fa-angle-right mx-1 my-2 light-blue-text" ></i>
      <h6 className="mx-1 my-2"><a className="light-blue-text"><b>Health Products</b></a></h6>
      <i class="fas fa-angle-right mx-1 my-2 light-blue-text" ></i>
      <h6 className="mx-1 my-2"><a className="blue-grey-text"><b>Dabur Chyawanprash Sugarfree
          </b></a></h6>
        </MDBCol>
        <MDBCol lg="3" md="3" sm="12" xs="12" className="d-flex justify-content-md-end justify-content-center">
        <div className="input-group md-form form-sm form-1 pl-0 mt-0 mb-0 " style={{...bgcolor,...inborder}}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-text1" style={bgcolor}>
            <MDBIcon className="text-gray" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 font1 fontsize1" type="text" placeholder="Search" style={{...bgcolor,...bnone}} aria-label="Search" />
      </div>

         </MDBCol>
          </MDBRow>
         
<MDBRow className="ml-0 mr-0 mt-0">
<MDBCol lg="3" md="12" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100  mt-4  ml-1 " style={{boxShadow:"none",border:"none"}} >
    
    <MDBRow className="h-85 border gray mb-1 " style={{...bstyle,...borderradius}}><img className="mx-auto" src={daburch} alt="dabur" style={{width:'100%'}} /></MDBRow>
    <MDBRow className="h-15"  style={bstyle}>
        <MDBCol className=" border gray mr-1" style={borderradius}><img className="mx-auto " src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className=" border gray mr-1" style={borderradius}><img className="mx-auto" src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className=" border gray mr-1" style={borderradius}><img className="mx-auto" src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className=" border gray mr-1" style={borderradius}><img className="mx-auto" src={daburch}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
    </MDBRow>
  </MDBCard>
</MDBCol>
<MDBCol lg="6" md="7" sm="12" className="mb-lg-0 mb-4">
<MDBCard className="h-100 border gray mt-4 ml-1">
  <MDBRow className="h-85 ml-1 mt-1">
  
  <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:26,fontWeight:500 }} className="text-left pb-0 mb-0">Dabur Chyawanprakash Sugarfree</p></MDBCol>
  <MDBCol  lg="12" md="12" sm="12" xs="12"><p className="grey-text text-left" style={{fontSize:12}}><i class="fas fa-clock amber-text mr-1" ></i>03:02 PM,15 Jan 2020</p></MDBCol>
  <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1" style={{fontSize:12}}><b>Manufacturer:</b></span><span className="grey-text text-left" style={{fontSize:12}}>Dabur India Ltd</span></MDBCol>
  <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1" style={{fontSize:12}}><b>Expiry Date:</b></span><span className="grey-text text-left" style={{fontSize:12}}>04 April 2020</span></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"><p className="text-left contentoverflow  pr-2" style={{fontSize:14}}><MDBBadge color="success" className="mr-2" style={{...shadow,...reviewradius}}>4.4 <MDBIcon icon="star" /></MDBBadge>371 recently brought this</p></MDBCol>
    <MDBCol  lg="12" md="12" sm="12" xs="12"><p className="text-left contentoverflow  pr-2" style={{fontSize:14}}><MDBBadge color="warning" className="mr-2" style={{...shadow,...reviewradius}}>Best Seller</MDBBadge>in Health Products</p></MDBCol>
 
 
  <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary">Quantity Available</p></MDBCol>
  <MDBCol  lg="9" md="9" sm="8" xs="8" className="justify-content-start d-flex align-items-center w-65"><p><MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14,textTransform:'lowercase'}} >900gm</MDBBtn></p> 
  <p className="mr-0 mr-md-2 mt-2">
      <span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b>
       <span style={{textDecoration:'line-through'}}><b>900</b></span>
       <div> <p className="mr-0 mr-md-4" style={{color:'black',fontSize:16}}>₹ 878</p></div></span>
       </p>
      
           
            <p >
            <MDBBadge color="danger" className="mr-0 mr-md-2" style={{...shadow,...reviewradius}}>5% OFF</MDBBadge>
           
            </p>
            </MDBCol>
            <MDBCol  lg="3" md="3" sm="4" xs="4" className="justify-content-end d-flex align-items-center pr-4 w-35"><MDBBtn color="addbtn"  id="addbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded >Add</MDBBtn>
             </MDBCol>
            
    
             <MDBCol  lg="9" md="9" sm="8" xs="8" className="justify-content-start d-flex align-items-center w-65"><p><MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14,textTransform:'lowercase'}} >500gm</MDBBtn></p> 
             <p className="mr-0 mr-md-2 mt-2">
      <span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b>
       <span style={{textDecoration:'line-through'}}><b>270</b></span>
       <div> <p className="mr-0 mr-md-4" style={{color:'black',fontSize:16}}>₹ 250</p></div></span>
       </p>
            <p >
            <MDBBadge color="danger" className="mr-0 mr-md-2" style={{...shadow,...reviewradius}}>10% OFF</MDBBadge>
           
            </p>
            </MDBCol>
            <MDBCol  lg="3" md="3" sm="4" xs="4" className="justify-content-end d-flex align-items-center pr-4 w-35"><MDBBtn color="addbtn"  id="addbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded >Add</MDBBtn>
             </MDBCol>
        
  
      
      

     
      
    
    
     
      
    
     
     
     
   </MDBRow>
   <MDBRow className="h-15 border-top gray ml-1 mr-0">
   <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary">Total</p></MDBCol>
   <MDBCol lg="7" md="7" sm="7" xs="7"  className=" pr-0 align-content-center w-50" style={{display:'grid',justifyContent:'flex-start'}}>
            <h6 style={{color:"black",fontSize:26}} ><b>₹ 405</b></h6></MDBCol>
    <MDBCol lg="5" md="5" sm="5" xs="5" className=" align-content-center w-50" style={{display:'grid',justifyContent:'flex-end'}} >
    <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14}} >ADD TO CART</MDBBtn>

    </MDBCol>
     
     </MDBRow>
  </MDBCard>

</MDBCol>
<MDBCol lg="3" md="5" sm="12" className="mb-lg-0 mb-4">
  <MDBCard className="h-100 mt-4 ml-1" style={cdstyle}>
   <MDBRow className="h-20 mr-0 ml-0 justify-content-center" style={{backgroundColor:"#23db23"}}><p style={{color:"white",textTransform:'uppercase',fontSize:'14px'}} className=" pb-0 mt-1 mb-1"><b>Additional Offers</b></p></MDBRow>
   <MDBRow className="mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0 text-left"><b>Amazon Pay:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
   <MDBRow className=" mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0 text-left"><b>PayPal:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
   <MDBRow className=" mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0 text-left"><b>Special Offer:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
   <MDBRow className=" mr-0 ml-0"><p style={{color:"gray",fontSize:12}} className="pl-2 pb-0 text-left"><b>Ola Money Postpaid:</b>Amazon Pay uses the consumer base of Amazon.com and focuses on giving users the option to pay with their Amazon accounts on external merchant websites. </p></MDBRow>
  </MDBCard>
</MDBCol>
</MDBRow>
      </div>
   

  );
}

export default DescribeProduct;