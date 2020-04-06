import React, { Component } from "react";
import {MDBNavLink,MDBDropdown,MDBDropdownToggle,MDBDropdownItem,MDBDropdownMenu,
MDBNavbar,MDBPagination,MDBPageItem,MDBPageNav,MDBBadge, MDBCard,MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse, MDBContainer

} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
//import { FaShoppingCart } from 'react-icons/fa';
import './../css/styling.css';
import './../css/button1.css';

import './../css/pagination.css';
import{ MDBRow, MDBCol,MDBBtn,} from "mdbreact";
import Sidenav from './sidenav';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
var customcarddesign={width:"20%"};
const rowpad = {
  marginLeft:0,
  marginRight:0,
  justifyContent: 'center'

};

const shadow={
  boxShadow:'none'
}
const leftborderradius={
  borderRadius:'1rem 0rem 0rem 1rem'
}
const rightborderradius={
  borderRadius:'0rem 1rem 1rem 0rem'
}
const pagiborcolor={
  borderColor:'#03a9f4'
}
const alignitems={
  justifyContent:'center',
display: 'flex'
}
class ProductList extends Component {
  state = {
    value: 1,
    collapseID: ""
   
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
    if(this.state.value<=1)
    {
      document.getElementById('addbtn').style.display='flex';
      document.getElementById('productadd').style.display='none';
    }
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }
  fSubmit(e)
{
  this.setState({ value: 1});
  document.getElementById('productadd').style.display='flex';
  document.getElementById('addbtn').style.display='none';

}
    
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
    
   
    render() {
      return (
        <Router>
         <div >
         
       <MDBRow className="px-3 py-4" style={{backgroundColor:'rgb(235, 237, 255)'}}>
 <MDBCol lg="2" md="4" sm="12">
 <Sidenav/>
 

</MDBCol>
<MDBCol lg="10" md="8" sm="12">
      <MDBRow>
        <MDBCol lg="3" md="12" sm="12" xs="12" className="d-flex justify-content-lg-start justify-content-center"><h6 className="my-2 mx-1"><a className="light-blue-text"><b>Home</b></a></h6>
        <i class="fas fa-angle-right mx-1 my-2 light-blue-text" ></i>
      <h6 className="mx-1 my-2"><a className="blue-grey-text"><b>Health Products</b></a></h6>
        </MDBCol>
      <MDBCol  lg="5" md="12" sm="12" xs="12" className="d-flex justify-content-center"   > <MDBPagination color="blue" border="1px solid black" >
      <MDBPageItem  active >
          <MDBPageNav className="px-1" style={{...shadow, ...leftborderradius,...pagiborcolor}} >
            <b>Newest</b> <span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem  >
          <MDBPageNav className="px-1" style={pagiborcolor} >
          <b className="blue-grey-text">Popular</b> <span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav className="px-1" style={pagiborcolor} >
          <b className="blue-grey-text">Low Price</b>
          </MDBPageNav>
        </MDBPageItem>
       
         
        <MDBPageItem >
          <MDBPageNav className="px-1" style={{...rightborderradius,...pagiborcolor}} >
          <b className="blue-grey-text">High Price</b>
          </MDBPageNav>
        </MDBPageItem>
      </MDBPagination>

</MDBCol>
      <MDBCol lg="4" md="12" sm="12" xs="12" className="d-flex justify-content-lg-end justify-content-center" style={alignitems}>

      <MDBPagination color="blue" border="1px solid black">
        <MDBPageItem  >
          <MDBPageNav aria-label="Previous" style={{...leftborderradius,...pagiborcolor}}>
          <i class="fas fa-angle-left blue-grey-text " ></i>
            <span className="sr-only ">Previous</span>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem  active>
          <MDBPageNav style={{...shadow, ...pagiborcolor}} >
          1<span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav style={pagiborcolor} >
          <b className="blue-grey-text">2</b>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav  style={pagiborcolor}>
          <b className="blue-grey-text">3</b>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav  style={pagiborcolor}>
          <b className="blue-grey-text">4</b>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav  style={pagiborcolor}>
          <b className="blue-grey-text">5</b>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
        <MDBPageNav aria-label="Next" style={{...rightborderradius,...pagiborcolor}}>
          <i class="fas fa-angle-right blue-grey-text " ></i>
            <span className="sr-only">Next</span>
          </MDBPageNav>
        </MDBPageItem>
      </MDBPagination>



      </MDBCol>
      </MDBRow>
     
      <MDBRow className="mt-4 ml-0 mr-0 justify-content-md-start justify-content-center" >
      <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     <div className="def-number-input number-input" style={{display:'none'}} id="productadd">
            <button type="button" class="" onClick={this.decrease} className="minus btn-blue-grey " ></button>
            <input className="quantity " name="quantity" value={this.state.value} onChange={()=> console.log('change')}
            type="number" />
            <button type="button" onClick={this.increase} className="plus btn-blue-grey"></button>
          </div>
                      <MDBBtn color="addbtn"  id="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded onClick={(e)=>this.fSubmit(e)}>Add</MDBBtn></MDBCol>
              
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
       
       
        </MDBRow>
       
      
        <MDBRow className="mt-4 ml-0 mr-0 justify-content-md-start justify-content-center" >
      <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     <div className="def-number-input number-input" style={{display:'none'}} id="productadd">
            <button type="button" class="" onClick={this.decrease} className="minus btn-blue-grey " ></button>
            <input className="quantity " name="quantity" value={this.state.value} onChange={()=> console.log('change')}
            type="number" />
            <button type="button" onClick={this.increase} className="plus btn-blue-grey"></button>
          </div>
                      <MDBBtn color="addbtn"  id="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded onClick={(e)=>this.fSubmit(e)}>Add</MDBBtn></MDBCol>
              
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
       
       
        </MDBRow>
       
      
        <MDBRow className="mt-4 ml-0 mr-0 justify-content-md-start justify-content-center" >
      <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     <div className="def-number-input number-input" style={{display:'none'}} id="productadd">
            <button type="button" class="" onClick={this.decrease} className="minus btn-blue-grey " ></button>
            <input className="quantity " name="quantity" value={this.state.value} onChange={()=> console.log('change')}
            type="number" />
            <button type="button" onClick={this.increase} className="plus btn-blue-grey"></button>
          </div>
                      <MDBBtn color="addbtn"  id="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded onClick={(e)=>this.fSubmit(e)}>Add</MDBBtn></MDBCol>
              
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
       
       
        </MDBRow>
       
      
        <MDBRow className="mt-4 ml-0 mr-0 justify-content-md-start justify-content-center" >
      <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     <div className="def-number-input number-input" style={{display:'none'}} id="productadd">
            <button type="button" class="" onClick={this.decrease} className="minus btn-blue-grey " ></button>
            <input className="quantity " name="quantity" value={this.state.value} onChange={()=> console.log('change')}
            type="number" />
            <button type="button" onClick={this.increase} className="plus btn-blue-grey"></button>
          </div>
                      <MDBBtn color="addbtn"  id="addbtn" className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded onClick={(e)=>this.fSubmit(e)}>Add</MDBBtn></MDBCol>
              
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
        <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-2 pl-2 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
             <MDBBadge color="danger" className="align-items-center" style={{height:"3rem", marginLeft:"-0.5rem",border:"1px solid azure",
  borderRadius:"10px 0px 10px 0",display:'flex',width:'40%',justifyContent:'center'}}>10% off</MDBBadge>
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
                
                     <MDBRow 
  style={rowpad}><p className="producthead  pl-2 ml-2 contentoverflow">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad}><p className="text-center proddescribe pl-2 contentoverflow">box of 90gm powder</p></MDBRow>
                 
            
                     <MDBRow style={rowpad}>
                        
                       <MDBCol style={{marginLeft:'-1.2rem'}}>
  
                       <p className=" ml-0 mb-0 mt-0 pl-1 prodprice" >₹198</p>
                     
                       
                
                       </MDBCol>
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
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
                     <MDBCol style={{marginRight:'-1.8rem'}}> 
                     
                      <MDBBtn color="addbtn"  className=" px-2 py-1 ml-0 mt-0 mr-1 addbtn" rounded >Add</MDBBtn></MDBCol>
              
             </MDBRow>
            </MDBCard>
         
          
          </MDBCol>
        
       
       
        </MDBRow>
       
      
        </MDBCol>
    </MDBRow>
    
</div>
          
          </Router>
        );
      }
    }
    
    export default ProductList;
