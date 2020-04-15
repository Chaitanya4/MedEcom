import React,{Component} from "react";
import {  MDBRow, MDBCol,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane, MDBCard,MDBContainer, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";
import icon_new_arrival from './../images/icon_new_arrivals.png';
import ensure from './../images/ensure.jpeg';
import  sugarfree from './../images/sugarfree.jpeg';
import zandu from './../images/zandu.jpg';
import sale from './../images/sale.jpg';
import bg_trending from './../images/bg_trending.png';
import icon_trending from './../images/icon_trending.png';
import daburch from './../images/daburch.jpeg';
const tabheight={
    
width:'100%',

border: "1px solid #33b5e5"
}
const slantdiv={backgroundImage: 'linear-gradient(60deg, #33b5e5 20%, rgba(0, 0, 0, 0) 0%)',textAlign:'left',color:'white'}
class DetailProducts extends Component{
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
          <MDBCol lg="9" md="12" sm="12">
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
            <MDBNavLink link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
            <b>How To Use</b> 
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
          <MDBTabPane tabId="2" role="tabpanel">
          <MDBRow >
              <p className="mt-2 grey-text pdescribe text-left pl-4">
           <b> Dabur Chyawanprash is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity. </b>
            </p>
              </MDBRow>
         
            <div  className="rightslantdiv pl-2">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
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
         
            <div  className="rightslantdiv pl-2">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
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
         
            <div  className="rightslantdiv pl-2">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
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
         
            <div  className="rightslantdiv pl-2">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
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
         
            <div  className="rightslantdiv pl-2">
               <b> Ingredients</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            <div className="rightslantdiv pl-2">
               <b> How to Use</b>
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
            
            <div className="rightslantdiv pl-2">
              <b>Storage Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement rich in antioxidants and Vitamin C</b></p>
                    </li>
                    <li>
<p className=" grey-text pdescribe text-left pl-2 py-1 my-0"><b>An ayurvedic nutritional supplement</b> </p>
                    </li>
                </ul>
            </MDBRow>
           
            <div className="rightslantdiv pl-2">
              <b>Safety Information</b> 
            </div>
            <MDBRow className="p-0 pt-1 mt-4">
                <ul>
                    <li>
<p className="grey-text pdescribe text-left pl-2 py-1 my-0"><b>Boost immunity</b></p>
                    </li>
                  
                </ul>
            </MDBRow>
           
           
          </MDBTabPane>
        </MDBTabContent>
     
          </MDBCol>
          <MDBCol lg="3" md="12" sm="12">
          
          <MDBRow className=" mr-0 ml-0 mb-4" ><h5 className=" pb-0"><b>Additional Discount</b></h5><hr style={{border: '2px solid #d6d6e6',

width: '50%',marginTop:'0.75rem'}} /></MDBRow>
<MDBRow style={{border: '1px solid #ced0d2',margin: 0,borderRadius: '0.3rem'}} className="mb-4 mt-1">
    <MDBCol lg="4" md="4" sm="4" className="px-0">
    <img className="mx-auto mt-1" src={daburch} alt="dabur" style={{height:95}}/>
    </MDBCol>
    <MDBCol lg="8" md="8" sm="8">
<MDBRow>
    <h5 className="text-left mt-2 mb-3 pl-2" style={{fontWeight:600}}> Pack of 2</h5>
</MDBRow>
<MDBRow>
    <MDBCol className="pl-2 pr-0" style={{display:'grid',justifyContent:'flex-start'}}><span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b> <span style={{textDecoration:'line-through'}}><b>900</b></span></span>
            <h6 style={{color:"black",fontSize:18}} ><b>₹ 198</b></h6></MDBCol>
    <MDBCol>
    <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none'}} ><b>BUY PACK</b></MDBBtn>

    </MDBCol>
</MDBRow>
    </MDBCol>
    <div className="productcard">
<b>10% off</b>

            </div>
</MDBRow>

<MDBRow style={{border: '1px solid #ced0d2',margin: 0,borderRadius: '0.3rem'}} className="mb-4 mt-1">
    <MDBCol lg="4" md="4" sm="4" className="px-0">
    <img className="mx-auto mt-1" src={daburch} alt="dabur" style={{height:95}}/>
    </MDBCol>
    <MDBCol lg="8" md="8" sm="8">
<MDBRow>
    <h5 className="text-left mt-2 mb-3 pl-2" style={{fontWeight:600}}> Pack of 2</h5>
</MDBRow>
<MDBRow>
    <MDBCol className="pl-2 pr-0" style={{display:'grid',justifyContent:'flex-start'}}><span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b> <span style={{textDecoration:'line-through'}}><b>900</b></span></span>
            <h6 style={{color:"black",fontSize:18}} ><b>₹ 198</b></h6></MDBCol>
    <MDBCol>
    <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none'}} ><b>BUY PACK</b></MDBBtn>

    </MDBCol>
</MDBRow>
    </MDBCol>
    <div className="productcard">
<b>10% off</b>

            </div>
</MDBRow>

<MDBRow style={{border: '1px solid #ced0d2',margin: 0,borderRadius: '0.3rem'}} className="mb-4 mt-1">
    <MDBCol lg="4" md="4" sm="4" className="px-0">
    <img className="mx-auto mt-1" src={daburch} alt="dabur" style={{height:95}}/>
    </MDBCol>
    <MDBCol lg="8" md="8" sm="8">
<MDBRow>
    <h5 className="text-left mt-2 mb-3 pl-2" style={{fontWeight:600}}> Pack of 2</h5>
</MDBRow>
<MDBRow>
    <MDBCol className="pl-2 pr-0" style={{display:'grid',justifyContent:'flex-start'}}><span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b> <span style={{textDecoration:'line-through'}}><b>900</b></span></span>
            <h6 style={{color:"black",fontSize:18}} ><b>₹ 198</b></h6></MDBCol>
    <MDBCol>
    <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none'}} ><b>BUY PACK</b></MDBBtn>

    </MDBCol>
</MDBRow>
    </MDBCol>
    <div className="productcard">
<b>10% off</b>

            </div>
</MDBRow>

<MDBRow style={{border: '1px solid #ced0d2',margin: 0,borderRadius: '0.3rem'}} className="mb-4 mt-1">
    <MDBCol lg="4" md="4" sm="4" className="px-0">
    <img className="mx-auto mt-1" src={daburch} alt="dabur" style={{height:95}}/>
    </MDBCol>
    <MDBCol lg="8" md="8" sm="8">
<MDBRow>
    <h5 className="text-left mt-2 mb-3 pl-2" style={{fontWeight:600}}> Pack of 2</h5>
</MDBRow>
<MDBRow>
    <MDBCol className="pl-2 pr-0" style={{display:'grid',justifyContent:'flex-start'}}><span className="text-left grey-text" style={{fontSize:'14px'}}><b>MRP</b> <span style={{textDecoration:'line-through'}}><b>900</b></span></span>
            <h6 style={{color:"black",fontSize:18}} ><b>₹ 198</b></h6></MDBCol>
    <MDBCol>
    <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none'}} ><b>BUY PACK</b></MDBBtn>

    </MDBCol>
</MDBRow>
    </MDBCol>
    <div className="productcard">
<b>10% off</b>

            </div>
</MDBRow>

</MDBCol>
        </MDBRow>
       
         
     </section>
    );
  }
  
}



export default DetailProducts;