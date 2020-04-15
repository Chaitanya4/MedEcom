import React,{Component} from "react";
import {  MDBRow, MDBCol, MDBCard,MDBContainer, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";
import icon_new_arrival from './../images/icon_new_arrivals.png';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
import sale from './../images/sale.jpg';
import bg_trending from './../images/bg_trending.png';
import icon_trending from './../images/icon_trending.png';
const stylebadge={height:"2rem",
borderRadius:"10px 0px 10px 0",display:'flex',width:'auto',justifyContent:'center',position: 'absolute',
left:0,
top: 0}  
const rowpad1={
  marginLeft:0,
  marginRight:0,
  display:'block'
};
const rowpad = {
   marginLeft:0,
   marginRight:0,
   justifyContent: 'center'
 };
 
const shadow={
   boxShadow:'none'
}

class TrendingProducts extends Component{
  state = {
    value: 1
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
    if(this.state.value<=1)
    {
      document.getElementById('taddbtn').style.display='flex';
      document.getElementById('tproductadd').style.display='none';
    }
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }
  fSubmit(e)
{
  this.setState({ value: 1});
  document.getElementById('tproductadd').style.display='flex';
  document.getElementById('taddbtn').style.display='none';

}
  render(){
    return (
      <section className="text-center my-5">
          
          <MDBRow className="pl-0 " style={{backgroundImage:  "url(" +bg_trending+ ")", backgroundColor:"rgb(203, 236, 233)"}}> 
        <MDBCol className="d-flex justify-content-center justify-content-md-start align-items-center"   lg="5" md="7" sm="12"><h3 className="pl-4 pr-4 prcardheading">  
<img src={icon_trending} alt="new_a rrivals"/>Trending Products</h3></MDBCol>   
  
    <MDBCol lg="4" md="1" sm="0"></MDBCol>
   <MDBCol className="d-flex justify-content-center justify-content-md-end align-items-center pl-4 pr-4" lg="3" md="4" sm="12"> <MDBBtn color="info pull-right viewallbtn cbtn" >View All</MDBBtn>
    <MDBBtn color="info pull-right viewallbtn" >&lt;</MDBBtn>
    <MDBBtn color="info pull-right viewallbtn" >&gt;</MDBBtn></MDBCol>
    
    
     </MDBRow>
      
       <MDBRow className="mt-4 ml-3 mr-3" style={{justifyContent:'center'}}>
       <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
      <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-1 pl-1 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
            
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
              
  <MDBBadge color="danger" className="align-items-center" style={stylebadge}>10% off</MDBBadge>
                 
                     <MDBRow 
  style={rowpad}><p className="producthead contentoverflow pl-2 pr-2">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad1}><p className="text-left proddescribe contentoverflow pl-2 pr-2">box of 90gm powder</p></MDBRow>
                 
            
                    
                        
                      <div style={rowpad1}>
                        <div className="float-left">
                         
                        <p className=" ml-0 mb-0 mt-0 pl-0 prodprice " >₹198</p>
                        </div>
                     
                     
                       <div className="float-right">

                       <div className="pmclass " style={{display:'none'}} id="tproductadd">
                       <div className="mclass" onClick={this.decrease}>
                       -
                         </div>
                         <div className="nclass">
{this.state.value}
                         </div>
                         <div className="pclass" onClick={this.increase}>
                        +

                         </div>
            </div>
                      <MDBBtn color="addbtn"  id="taddbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded onClick={(e)=>this.fSubmit(e)}>Add</MDBBtn>
              

                       </div>
                
                      
                    
                      </div>
  
                     
            
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
      <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-1 pl-1 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
            
                 <img className="mx-auto my-2" src={zandu} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
              
  <MDBBadge color="danger" className="align-items-center" style={stylebadge}>30% off</MDBBadge>
                 
                     <MDBRow 
  style={rowpad}><p className="producthead contentoverflow pl-2 pr-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                     <MDBRow style={rowpad1}><p className="text-left proddescribe contentoverflow pl-2 pr-2">bottle of 90 tablets</p></MDBRow>
                 
            
                    
                        
                      <div style={rowpad1}>
                        <div className="float-left">
                         
                        <p className=" ml-0 mb-0 mt-0 pl-0 prodprice " >₹198</p>
                        </div>
                     
                     
                       <div className="float-right">

                       <div className="pmclass " style={{display:'none'}} id="tproductadd">
                       <div className="mclass" onClick={this.decrease}>
                       -
                         </div>
                         <div className="nclass">
{this.state.value}
                         </div>
                         <div className="pclass" onClick={this.increase}>
                        +

                         </div>
            </div>
                      <MDBBtn color="addbtn"  id="taddbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded>Add</MDBBtn>
              

                       </div>
                
                      
                    
                      </div>
  
                     
            
            </MDBCard>
         
          
          </MDBCol>
       
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
      <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-1 pl-1 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
            
                 <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
              
              
                     <MDBRow 
  style={rowpad}><p className="producthead contentoverflow pl-2 pr-2">Sugar free Natural Powder</p></MDBRow>
                     <MDBRow style={rowpad1}><p className="text-left proddescribe contentoverflow pl-2 pr-2">Liquid</p></MDBRow>
                 
            
                    
                        
                      <div style={rowpad1}>
                        <div className="float-left">
                         
                        <p className=" ml-0 mb-0 mt-0 pl-0 prodprice " >₹98</p>
                        </div>
                     
                     
                       <div className="float-right">

                       <div className="pmclass " style={{display:'none'}} id="tproductadd">
                       <div className="mclass" onClick={this.decrease}>
                       -
                         </div>
                         <div className="nclass">
{this.state.value}
                         </div>
                         <div className="pclass" onClick={this.increase}>
                        +

                         </div>
            </div>
                      <MDBBtn color="addbtn"  id="taddbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded >Add</MDBBtn>
              

                       </div>
                
                      
                    
                      </div>
  
                     
            
            </MDBCard>
         
          
          </MDBCol>
       
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
      <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-1 pl-1 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
            
                 <img className="mx-auto my-2" src={ensure} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
              
             
                     <MDBRow 
  style={rowpad}><p className="producthead contentoverflow pl-2 pr-2">Ensure diabetes care powder</p></MDBRow>
                     <MDBRow style={rowpad1}><p className="text-left proddescribe contentoverflow pl-2 pr-2">box of 90gm powder</p></MDBRow>
                 
            
                    
                        
                      <div style={rowpad1}>
                        <div className="float-left">
                         
                        <p className=" ml-0 mb-0 mt-0 pl-0 prodprice " >₹198</p>
                        </div>
                     
                     
                       <div className="float-right">

                       <div className="pmclass " style={{display:'none'}} id="tproductadd">
                       <div className="mclass" onClick={this.decrease}>
                       -
                         </div>
                         <div className="nclass">
{this.state.value}
                         </div>
                         <div className="pclass" onClick={this.increase}>
                        +

                         </div>
            </div>
                      <MDBBtn color="addbtn"  id="taddbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded >Add</MDBBtn>
              

                       </div>
                
                      
                    
                      </div>
  
                     
            
            </MDBCard>
         
          
          </MDBCol>
        
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
      <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-1 pl-1 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
            
                 <img className="mx-auto my-2" src={zandu} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
              
               
                     <MDBRow 
  style={rowpad}><p className="producthead contentoverflow pl-2 pr-2">Zandu Kesari Jeevan Fit for Diabetics</p></MDBRow>
                     <MDBRow style={rowpad1}><p className="text-left proddescribe contentoverflow pl-2 pr-2">bottle of 90 tablets</p></MDBRow>
                 
            
                    
                        
                      <div style={rowpad1}>
                        <div className="float-left">
                         
                        <p className=" ml-0 mb-0 mt-0 pl-0 prodprice " >₹198</p>
                        </div>
                     
                     
                       <div className="float-right">

                       <div className="pmclass " style={{display:'none'}} id="tproductadd">
                       <div className="mclass" onClick={this.decrease}>
                       -
                         </div>
                         <div className="nclass">
{this.state.value}
                         </div>
                         <div className="pclass" onClick={this.increase}>
                        +

                         </div>
            </div>
                      <MDBBtn color="addbtn"  id="taddbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded>Add</MDBBtn>
              

                       </div>
                
                      
                    
                      </div>
  
                     
            
            </MDBCard>
         
          
          </MDBCol>
       
          <MDBCol lg="2" md="4" sm="6"  className="px-1 pb-3" >
      <MDBCard style={shadow} className="ml-1 mr-1 mb-1 pr-1 pl-1 border border-gray cardradius h-100" >
     
        <MDBRow style={rowpad} >
            
                 <img className="mx-auto my-2" src={sugarfree} style={{height:110,width:80}} alt="zandu"></img>
              </MDBRow>
              
  <MDBBadge color="danger" className="align-items-center" style={stylebadge}>10% off</MDBBadge>
                 
                     <MDBRow 
  style={rowpad}><p className="producthead contentoverflow pl-2 pr-2">Sugar free Natural Powder</p></MDBRow>
                     <MDBRow style={rowpad1}><p className="text-left proddescribe contentoverflow pl-2 pr-2">Liquid</p></MDBRow>
                 
            
                    
                        
                      <div style={rowpad1}>
                        <div className="float-left">
                         
                        <p className=" ml-0 mb-0 mt-0 pl-0 prodprice " >₹98</p>
                        </div>
                     
                     
                       <div className="float-right">

                       <div className="pmclass " style={{display:'none'}} id="tproductadd">
                       <div className="mclass" onClick={this.decrease}>
                       -
                         </div>
                         <div className="nclass">
{this.state.value}
                         </div>
                         <div className="pclass" onClick={this.increase}>
                        +

                         </div>
            </div>
                      <MDBBtn color="addbtn"  id="taddbtn" className=" px-2 py-0 ml-0 mt-0 mr-1 addbtn " rounded>Add</MDBBtn>
              

                       </div>
                
                      
                    
                      </div>
  
                     
            
            </MDBCard>
         
          
          </MDBCol>
       
       
       
        </MDBRow>
       
         
     </section>
    );
  }
  
}


export default TrendingProducts;