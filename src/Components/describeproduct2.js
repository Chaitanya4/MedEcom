
import React from "react";
import { MDBCol,MDBIcon, MDBCard, MDBCardImage,MDBBadge,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn, MDBRow, MDBFooter, MDBContainer } from "mdbreact";

import icon_white_reliable from './../images/icon_white_reliable.png';
import icon_white_secure from './../images/icon_white_secure.png';
import icon_white_affordable from './../images/icon_white_affordable.png';
import solvin from './../images/solvin.jpeg';
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
    borderRadius:'0.5rem',
    
  }
  const fs={
      fontSize:18
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
class DescribeProduct2 extends React.Component{
    state = {
        value: 1
      }
    
      decrease = () => {
        this.setState({ value: this.state.value - 1 });
        if(this.state.value<=1)
        { document.getElementById('psub').style.pointerEvents='none';
        
        }
      }
    
      increase = () => {
        this.setState({ value: this.state.value + 1 });
        document.getElementById('psub').style.pointerEvents='auto';
      }
      render(){

        return (
            <div>
                <MDBRow className="ml-0 mr-0">
                <MDBCol lg="9" md="9" sm="12" xs="12" className="d-flex justify-content-md-start justify-content-center"><h6 className="my-2 mx-1"><a className="light-blue-text"><b>Home</b></a></h6>
              <i class="fas fa-angle-right mx-1 my-2 light-blue-text" ></i>
            <h6 className="mx-1 my-2"><a className="light-blue-text"><b>Health Products</b></a></h6>
            <i class="fas fa-angle-right mx-1 my-2 light-blue-text" ></i>
            <h6 className="mx-1 my-2"><a className="blue-grey-text"><b>Zerodol-P Tablet
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
      <MDBCol lg="4" md="4" sm="12" className="mb-lg-0 mb-4">
      <MDBCard className="h-100  mt-4  ml-1 " style={{boxShadow:"none",border:"none"}} >
    
    <MDBRow className="h-80 border gray mb-1 " style={{...bstyle,...borderradius}}><img className="mx-auto" src={solvin} alt="dabur" style={{width:'auto',height:'auto'}} /></MDBRow>
    <MDBRow className="h-20"  style={bstyle}>
        <MDBCol className="h-100 border gray mr-1" style={borderradius}><img className="mx-auto "src={solvin}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100 border gray mr-1" style={borderradius}><img className="mx-auto" src={solvin}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100 border gray mr-1" style={borderradius}><img className="mx-auto" src={solvin}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100 border gray mr-1" style={borderradius}><img className="mx-auto" src={solvin}  style={{width: "100%", height: "100%"}}alt="dabur" /></MDBCol>
        <MDBCol className="h-100  mr-1"></MDBCol>
    </MDBRow>
  </MDBCard>
 </MDBCol>
      <MDBCol lg="8" md="8" sm="12" className="mb-lg-0 mb-4">
      <MDBCard className="h-100 border gray mt-4 ml-1">
        <MDBRow className="h-80 ml-1 mt-1">
        
        <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:26,fontWeight:500 }} className="text-left pb-0 mb-0">Solvin Cold Tablet <MDBBadge color="success" className="mr-2 float-right mt-1" style={{...shadow,...reviewradius,...fs}}>4.4 <MDBIcon icon="star" /></MDBBadge></p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12"><p className="grey-text text-left mb-0 pb-1" style={{fontSize:12}}><i class="fas fa-clock amber-text mr-1" ></i>03:02 PM,15 Jan 2020</p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><p className="text-left mr-1 mb-0 pb-1 text-danger" style={{fontSize:12}}>P<sub>x</sub>  Prescription required</p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1" style={{fontSize:12}}><b>Manufacturer:</b></span><span className="text-primary text-left" style={{fontSize:12}}>Ipca Laboratories Ltd</span></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1" style={{fontSize:12}}><b>Salt Composition:</b></span><span className="text-primary text-left" style={{fontSize:12}}>Chlorpheniramine Maleate (2mg) + Paracetamol/Acetaminophen (500mg) + Phenylephrine (10mg)</span></MDBCol>
        
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1 pb-2" style={{fontSize:12}}><b>Expiry Date:</b></span><span className="grey-text text-left" style={{fontSize:12}}>04 April 2020</span></MDBCol>
         
        <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary"><i class="fas fa-arrow-down mr-2"></i>105 Answered Questions</p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-3 text-primary"><i class="fas fa-arrow-down mr-2"></i>View Alternate Brands</p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="justify-content-start d-flex ">
      
        <p className="mr-4">
        <div className="text-left mr-1" style={{fontSize:16}}><b>Price</b></div>
            <span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b>
             <span style={{textDecoration:'line-through'}}><b>45</b></span>
             <div> <p className="mr-0 mr-md-4" style={{color:'black',fontSize:16}}>₹36</p></div>
             </span>
             </p>
            
                 
             <p className="mr-4">
             <div className="text-left mr-1" style={{fontSize:16}}><b>Quantity</b></div>
            <span >    <div className="pmclass " >
                             <div className="mclass" onClick={this.decrease} id="psub">
                             -
                               </div>
                               <div className="nclass">
      {this.state.value}
                               </div>
                               <div className="pclass" onClick={this.increase}>
                              +
      
                               </div>
                  </div>
                          </span>
             </p>
          <p className="mr-1 mt-4 mb-4 text-left text-danger" style={{fontSize:14}}>10 Tablets in 1 strip</p>
                  </MDBCol>
               
              
        
            
            
      
           
            
          
          
           
            
          
           
           
           
         </MDBRow>
         <MDBRow className="h-20 border-top align-content-center gray ml-1 mr-0">
         <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary">Total</p></MDBCol>
         <MDBCol lg="7" md="7" sm="7" xs="7"  className=" pr-0 align-content-center w-50" style={{display:'grid',justifyContent:'flex-start'}}>
                  <h6 className="text-left" ><b style={{color:"black",fontSize:26}}>₹36</b> <div style={{color:'#09ea09',fontSize:12,fontWeight:500}}>Get 20% off</div></h6>
                 
                  </MDBCol>
          <MDBCol lg="5" md="5" sm="5" xs="5" className=" align-content-center w-50" style={{display:'grid',justifyContent:'flex-end'}} >
          <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14}} >ADD TO CART</MDBBtn>
      
          </MDBCol>
           
           </MDBRow>
        </MDBCard>
      
      </MDBCol>
      </MDBRow>
            </div>
         
      
        );

      }
  
}

export default DescribeProduct2;