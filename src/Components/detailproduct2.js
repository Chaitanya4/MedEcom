import React,{Component} from "react";
import {  MDBRow, MDBCol,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane, MDBCard,MDBContainer, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";

const tabheight={
    
width:'100%',

border: "1px solid #33b5e5"
}
const slantdiv={backgroundImage: 'linear-gradient(60deg, #33b5e5 20%, rgba(0, 0, 0, 0) 0%)',textAlign:'left',color:'white'}
class DetailProducts2 extends Component{
    state = {
        activeItem: "1"
      };
  
      toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      };
  render(){
    return (
      <section className="text-center my-5 mr-3 ml-3">
          
          <MDBRow className="pl-0 "> 
          <MDBCol lg="12" md="12" sm="12">
          <MDBNav className="nav-tabs ">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
           <b>About</b> 
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
            <b>Benefits</b>  
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
            <b> Ingredients</b>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "7"} onClick={this.toggle("7")} role="tab" >
            <b>Uses</b>  
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
            <b>How To Use</b> 
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "8"} onClick={this.toggle("8")} role="tab" >
            <b>How it works</b>  
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "5"} onClick={this.toggle("5")} role="tab" >
            <b>Storage Information</b> 
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "6"} onClick={this.toggle("6")} role="tab" >
            <b>Safety Information</b>  
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} style={tabheight} className="pr-3">
        <MDBTabPane tabId="1" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Benefits</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Ingredients</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
           
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
          <MDBTabPane tabId="5" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
          <MDBTabPane tabId="6" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
          <MDBTabPane tabId="7" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
          <MDBTabPane tabId="8" role="tabpanel">
              <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2 mt-3">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2 mt-3">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2 mt-3">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2 mt-3">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-5">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
          </MDBTabPane>
        
          </MDBTabContent>
     
          </MDBCol>
           </MDBRow>
       
         
     </section>
    );
  }
  
}



export default DetailProducts2;