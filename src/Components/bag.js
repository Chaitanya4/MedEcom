import React,{Component} from "react";
import {  MDBRow, MDBCol, MDBCard,MDBContainer,MDBIcon, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";
import icon_new_arrival from './../images/icon_new_arrivals.png';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
import sale from './../images/sale.jpg';
import bg_beauty_grooming from './../images/bg_beauty_grooming.png';
import icon_beauty from './../images/icon_beauty.png';

          
const rowpad = {
   marginLeft:0,
   marginRight:0,
   justifyContent: 'center'
 };
 
const shadow={
   boxShadow:'none'
}

class BeautyGroom extends Component{
  state = {
    value: 1
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
  render(){
    return (
      <section className="text-center my-5">
          
          <MDBRow className="pl-0 " style={{backgroundImage:  "url(" +bg_beauty_grooming+ ")", backgroundColor:"rgb(203, 236, 233)"}}> 
          <MDBCol className="d-flex justify-content-center justify-content-lg-start align-items-center" lg="5" md="12" sm="12"><h3 className="pl-4 pr-4 prcardheading">  
  <img src={icon_beauty} alt="new_a rrivals"/>Beauty &amp; Grooming</h3></MDBCol>   
    
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
                     <div className="def-number-input number-input mr-3 mb-0" style={{display:'none'}} id="productadd">
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
  
}

export default BeautyGroom;