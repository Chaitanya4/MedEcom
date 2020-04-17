import React,{Component} from "react";
import {  MDBRow, MDBCol,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane, MDBIcon, MDBListGroup, MDBListGroupItem,MDBCard,MDBContainer, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";
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
const inborder={
    border:'1px solid rgb(189, 198, 200)',
    borderRadius:'2rem',
    width:'40%'
  }
  const bgcolor={
    backgroundColor:'#fff0'
  }
  const bnone={
    borderBottom:'none'
  }
const slantdiv={backgroundImage: 'linear-gradient(60deg, #33b5e5 20%, rgba(0, 0, 0, 0) 0%)',textAlign:'left',color:'white'}
class FreqCust extends Component{
    
  render(){
    return (
      <section className="text-center my-5 mr-3 ml-3">
          
          <MDBRow className="pl-0 mt-2"> 
          <MDBCol lg="9" md="12" sm="12">
          <MDBListGroup style={{ width: "100%" }}>
    <MDBListGroupItem className="pb-0"><h6  className="text-left mb-3 text-primary"><b>Customer Feedback</b></h6>
    <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><div className="stylecircle d-flex justify-content-center align-items-center float-left"><p style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>AA</p></div>
    <div className="ml-5"> <p className="pl-3 text-left ml-3 " style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>Atul Agnihotri</p>
    <p className="pl-3 text-left ml-3" style={{margin:'auto',fontSize: 14}}><span className="text-primary"><b>Commented at: </b></span><span className="grey-text"><b>03:02 PM, 15 Jan 2020</b></span></p></div>

    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:18}} className="text-left mt-3"><b>Perfect product</b></p></MDBCol>
    
    
    </MDBRow>
    </MDBListGroupItem>
    <MDBListGroupItem className="pb-0"> <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><div className="stylecircle d-flex justify-content-center align-items-center float-left"><p style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>AA</p></div>
    <div className="ml-5"> <p className="pl-3 text-left ml-3 " style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>Atul Agnihotri</p>
    <p className="pl-3 text-left ml-3" style={{margin:'auto',fontSize: 14}}><span className="text-primary"><b>Commented at: </b></span><span className="grey-text"><b>03:02 PM, 15 Jan 2020</b></span></p></div>

    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:18}} className="text-left mt-3"><b>Perfect product</b></p></MDBCol>
    
    
    </MDBRow>
    </MDBListGroupItem>
   
    <MDBListGroupItem className="pb-0"> <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><div className="stylecircle d-flex justify-content-center align-items-center float-left"><p style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>AA</p></div>
    <div className="ml-5"> <p className="pl-3 text-left ml-3 " style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>Atul Agnihotri</p>
    <p className="pl-3 text-left ml-3" style={{margin:'auto',fontSize: 14}}><span className="text-primary"><b>Commented at: </b></span><span className="grey-text"><b>03:02 PM, 15 Jan 2020</b></span></p></div>

    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:18}} className="text-left mt-3"><b>Perfect product</b></p></MDBCol>
    
    
    </MDBRow>
    </MDBListGroupItem>
   
    <MDBListGroupItem className="pb-0"> <MDBRow>
    
    <MDBCol lg="12" md="12" sm="12" xs="12"><div className="stylecircle d-flex justify-content-center align-items-center float-left"><p style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>AA</p></div>
    <div className="ml-5"> <p className="pl-3 text-left ml-3 " style={{margin:'auto',fontWeight: 500,
fontSize: 18}}>Atul Agnihotri</p>
    <p className="pl-3 text-left ml-3" style={{margin:'auto',fontSize: 14}}><span className="text-primary"><b>Commented at: </b></span><span className="grey-text"><b>03:02 PM, 15 Jan 2020</b></span></p></div>

    </MDBCol>
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:18}} className="text-left mt-3"><b>Bootstrap text color is a set of colors that can be used to change the font's color. A text area can also be set up to change color when a mouse hovers over it.</b></p></MDBCol>
    
    
    </MDBRow>
    </MDBListGroupItem>
    
    <MDBListGroupItem  style={{boxShadow: '0 0 10px rgb(51, 181, 229)'}}> <MDBRow>
    <i class="fas fa-paperclip mt-2 mx-3 grey-text" style={{fontSize:'1.5rem'}} ></i>
    <div className="input-group md-form form-sm form-1 pl-0 mt-0 mb-0 " style={{...bgcolor,...inborder}}>
       
        <input className="form-control my-0 font1 fontsize1" type="text" placeholder="Comment Something" style={{...bgcolor,...bnone}} aria-label="Search" /><i class="far fa-paper-plane mr-4 mt-1 grey-text" style={{fontSize:'1.5rem'}}></i>
      </div>
    </MDBRow>
    </MDBListGroupItem>
    
  </MDBListGroup>

          </MDBCol>
          <MDBCol lg="3" md="12" sm="12">
          
          <MDBRow className=" mr-0 ml-0 mb-4" ><h5 className=" pb-0"><b>Frequently bought together</b></h5><hr style={{border: '2px solid #d6d6e6',

width: '30%',marginTop:'0.75rem'}} /></MDBRow>
<MDBRow style={{border: '1px solid #ced0d2',margin: 0,borderRadius: '0.3rem'}} className="mb-4 mt-1">
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
    <MDBRow className="border-top gray ml-0 mr-0" style={{width:'100%'}}>
   <MDBCol  lg="12" md="12" sm="12" xs="12"> <p  style={{fontSize:12,fontWeight:500 }} className="text-left pb-0 mb-0 text-primary">Total</p></MDBCol>
   <MDBCol lg="7" md="7" sm="7" xs="7"  className=" pr-0 align-content-center w-50" style={{display:'grid',justifyContent:'flex-start'}}>
            <h6 style={{color:"black",fontSize:26}} ><b>₹ 405</b></h6></MDBCol>
    <MDBCol lg="5" md="5" sm="5" xs="5" className=" align-content-center w-50" style={{display:'grid',justifyContent:'flex-end'}} >
    <MDBBtn color="info btn-sm px-2 py-2 ml-0 float-right" style={{boxShadow:'none',fontSize:14}} >ADD TO CART</MDBBtn>

    </MDBCol>
     
     </MDBRow>
</MDBRow>


</MDBCol>
        </MDBRow>
       
         
     </section>
    );
  }
  
}



export default FreqCust;