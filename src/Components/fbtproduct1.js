import React,{Component} from "react";
import {  MDBRow, MDBCol,MDBCollapse,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane, MDBIcon, MDBListGroup, MDBListGroupItem,MDBCard,MDBContainer, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn } from "mdbreact";
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
class FreqCust1 extends Component{
    state = {
        collapseID: ''


      };
    
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
      };
     render(){
    const { collapseID } = this.state;
    return (
      <section className="text-center my-5 mr-3 ml-3">
          
          <MDBRow className="pl-0 mt-2"> 
         <MDBCol lg="6" md="6" sm="12">
          
          <MDBRow className=" mr-0 ml-0 mb-4" ><h5 className=" pb-0 text-black-75"><b>Frequently Asked Questions</b></h5></MDBRow>
<MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>1. What is paracetamol?</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse0')} className="float-right"> {collapseID === 'navbarCollapse0' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse0'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis.</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>2. Before taking this medicine</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse1')} className="float-right"> {collapseID === 'navbarCollapse1' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>3. Medicine Information</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse2')} className="float-right"> {collapseID === 'navbarCollapse2' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse2'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>4. How should I use paracetamol?</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse3')} className="float-right"> {collapseID === 'navbarCollapse3' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse3'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, </b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
     <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>5. What happens if I miss a dose?</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse4')} className="float-right"> {collapseID === 'navbarCollapse4' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse4'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. </b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>6. What happens if I overdose?</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse5')} className="float-right"> {collapseID === 'navbarCollapse5' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse5'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>7. What Should I avoid?</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse6')} className="float-right"> {collapseID === 'navbarCollapse6' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse6'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>8. Paracetamol side effects</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse7')} className="float-right"> {collapseID === 'navbarCollapse7' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse7'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>
             <MDBRow className=" mr-0 ml-0 my-2 py-2 border gray rounded-sm">
   <div className="d-block w-100 px-4 pb-0 ">
       <div className="float-left">
       <h6 className="mb-0 text-left"><b>9. Paracetamol dosing Information</b></h6> 
       </div>
       <div  onClick={this.toggleCollapse('navbarCollapse8')} className="float-right"> {collapseID === 'navbarCollapse8' ? <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-minus-circle"></i></p> : <p style={{fontSize:18,fontWeight:600,marginTop:'-0.25rem',marginBottom:'-3rem'}}><i class="fas fa-plus-circle"></i></p>} 
              </div>
      
       </div> 
  
          <MDBCollapse
                id='navbarCollapse8'
                isOpen={this.state.collapseID}
                navbar
              >
  <p className="px-4 pt-3  text-left text-black-50"><b>Paracetamol is used to treat many conditions such as headache, muscle aches</b></p>             
  
                       </MDBCollapse>
              
             </MDBRow>

</MDBCol>
<MDBCol lg="6" md="6" sm="12">
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
    <MDBCol lg="12" md="12" sm="12" xs="12"><p style={{color:"gray",fontSize:18}} className="text-left mt-3"><b>Bootstrap text color is a set of colors that can be used to change the font's color.</b></p></MDBCol>
    
    
    </MDBRow>
    </MDBListGroupItem>
    <MDBListGroupItem style={{boxShadow: '0 0 10px rgb(51, 181, 229)'}}> <MDBRow>
    <i class="fas fa-paperclip mt-2 mx-3 grey-text" style={{fontSize:'1.5rem'}} ></i>
    <div className="input-group md-form form-sm form-1 pl-0 mt-0 mb-0 " style={{...bgcolor,...inborder}}>
       
        <input className="form-control my-0 font1 fontsize1" type="text" placeholder="Comment Something" style={{...bgcolor,...bnone}} aria-label="Search" /><i class="far fa-paper-plane mr-4 mt-1 grey-text" style={{fontSize:'1.5rem'}}></i>
      </div>
    </MDBRow>
    </MDBListGroupItem>
    
  </MDBListGroup>

          </MDBCol>
          
        </MDBRow>
       
         
     </section>
    );
  }
  
}



export default FreqCust1;