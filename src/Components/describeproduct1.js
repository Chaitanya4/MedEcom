
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
class DescribeProduct1 extends React.Component{
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
      <MDBCol lg="3" md="12" sm="12" className="mb-lg-0 mb-4">
      <MDBCard className="h-100 border gray  mt-4  ml-1 " style={{boxShadow:"none",border:"none"}} >
    
   <img className="mx-auto" src={daburch} alt="dabur" style={{width:'100%',height:'100%'}} />
    
  </MDBCard>
 </MDBCol>
      <MDBCol lg="6" md="7" sm="12" className="mb-lg-0 mb-4">
      <MDBCard className="h-100 border gray mt-4 ml-1">
        <MDBRow className="h-80 ml-1 mt-1">
        
        <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:26,fontWeight:500 }} className="text-left pb-0 mb-2">SBL Arsenic Album Dilution 50M CH <MDBBadge color="success" className="mr-2 float-right mt-1" style={{...shadow,...reviewradius,...fs}}>4.4 <MDBIcon icon="star" /></MDBBadge></p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12"><p className="grey-text text-left mb-1" style={{fontSize:12}}><i class="fas fa-clock amber-text mr-1" ></i>03:02 PM,15 Jan 2020</p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1" style={{fontSize:12}}><b>Manufacturer:</b></span><span className="text-primary text-left" style={{fontSize:12,textDecoration:'underline'}}>Dabur India Ltd</span></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="d-flex justify-flex-start"><span className="text-left mr-1" style={{fontSize:12}}><b>Expiry Date:</b></span><span className="grey-text text-left" style={{fontSize:12}}>04 April 2020</span></MDBCol>
         
       
        <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500,textDecoration:'underline' }} className="text-left pb-0 mb-0 text-primary">View Alternate Brands</p></MDBCol>
        <MDBCol  lg="12" md="12" sm="12" xs="12" className="justify-content-start d-flex  w-65">
        <p className="mr-4 ">
        <div className="text-left mr-1" style={{fontSize:16}}><b>Potency</b></div>
            <span className="text-left grey-text" style={{fontSize:'14px'}}><select class="custom-select">
  <option selected>3 CH</option>
  <option value="1">4 CH</option>
  <option value="2">5 CH</option>
  <option value="3">7 CH</option>
</select>
             </span>
             </p>
          
        <p className="mr-4">
        <div className="text-left mr-1" style={{fontSize:16}}><b>Price</b></div>
            <span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b>
             <span style={{textDecoration:'line-through'}}><b>900</b></span>
             <div> <p className="mr-0 mr-md-4" style={{color:'black',fontSize:16}}>₹ 878</p></div>
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
          
                  </MDBCol>
               
              
        
            
            
      
           
            
          
          
           
            
          
           
           
           
         </MDBRow>
         <MDBRow className="h-20 border-top align-content-center gray ml-1 mr-0">
         <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary">Total</p></MDBCol>
         <MDBCol lg="7" md="7" sm="7" xs="7"  className=" pr-0 align-content-center w-50" style={{display:'grid',justifyContent:'flex-start'}}>
                  <h6  className="text-left" ><b style={{color:"black",fontSize:26}}>₹ 405</b> <div style={{color:'#09ea09',fontSize:12,fontWeight:500}}>Get 10% off</div></h6>
                 
                  </MDBCol>
          <MDBCol lg="5" md="5" sm="5" xs="5" className=" align-content-center w-50" style={{display:'grid',justifyContent:'flex-end'}} >
          <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14}} >ADD TO CART</MDBBtn>
      
          </MDBCol>
           
           </MDBRow>
        </MDBCard>
      
      </MDBCol>
      <MDBCol lg="3" md="5" sm="12" className="mb-lg-0 mb-4">
        <MDBCard className="h-100 mt-4 ml-1" style={{boxShadow:'none'}}>
        <MDBRow className=" h-10 mr-0 ml-0 mb-4" ><h5 className=" pb-0"><b>Frequently bought together</b></h5><hr style={{border: '2px solid #d6d6e6',
      
      width: '30%',marginTop:'0.75rem'}} /></MDBRow>
      <MDBRow style={{border: '1px solid #ced0d2',margin: 0,borderRadius: '0.3rem'}} className="mb-1 mt-1 h-90 ">
          <MDBRow>
          <MDBCol lg="4" md="4" sm="12" >
          <img className="mx-auto mt-1" src={daburch} alt="dabur" style={{height:95}}/>
          </MDBCol>
          <MDBCol lg="8" md="8" sm="12">
      <MDBRow  className="ml-0">
          <h5 className="text-left mt-2 mb-3 pl-2" style={{fontWeight:500}}> Dabur Chywanprash sugarfree</h5>
      </MDBRow>
      <MDBRow  className="ml-0">
          <MDBCol className="pl-2 pr-0" style={{display:'grid',justifyContent:'flex-start'}}><span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b> <span style={{textDecoration:'line-through'}}><b>900</b></span></span>
                  <h6 style={{color:"black",fontSize:18}} ><b>₹ 198</b></h6></MDBCol>
         
      </MDBRow>
          </MDBCol>
         
          </MDBRow>
          
          
          <MDBRow className=" mr-0 ml-5 my-1" style={{width:'100%'}}>
              
              <h5 className=" pb-0" style={{fontSize:'250%'}}><b>+</b></h5><hr style={{border: '2px solid #d6d6e6',
      
      width: '70%',marginTop:'1.5rem'}} />
                 </MDBRow>
      
          <MDBRow>
          <MDBCol lg="4" md="4" sm="12" >
          <img className="mx-auto mt-1" src={daburch} alt="dabur" style={{height:95}}/>
          </MDBCol>
          <MDBCol lg="8" md="8" sm="12">
      <MDBRow className="ml-0">
          <h5 className="text-left mt-2 mb-3 pl-2" style={{fontWeight:500}}> Dabur Chywanprash sugarfree</h5>
      </MDBRow>
      <MDBRow  className="ml-0">
          <MDBCol className="pl-2 pr-0" style={{display:'grid',justifyContent:'flex-start'}}><span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b> <span style={{textDecoration:'line-through'}}><b>900</b></span></span>
                  <h6 style={{color:"black",fontSize:18}} ><b>₹ 198</b></h6></MDBCol>
         
      </MDBRow>
          </MDBCol>
         
          </MDBRow>
          <MDBRow className="border-top gray ml-0 mr-0 align-content-center" style={{width:'100%'}}>
         <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary">Total</p></MDBCol>
         <MDBCol lg="7" md="7" sm="7" xs="7"  className=" pr-0 align-content-center w-50" style={{display:'grid',justifyContent:'flex-start'}}>
                  <h6  className="text-left" style={{color:"black",fontSize:26}} ><b>₹ 405</b></h6></MDBCol>
          <MDBCol lg="5" md="5" sm="5" xs="5" className=" align-content-center w-50" style={{display:'grid',justifyContent:'flex-end'}} >
          <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14}} >ADD TO CART</MDBBtn>
      
          </MDBCol>
           
           </MDBRow>
      </MDBRow>
      
         </MDBCard>
      </MDBCol>
      </MDBRow>
            </div>
         
      
        );

      }
  
}

export default DescribeProduct1;