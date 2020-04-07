import React from "react";
import { MDBBtn, MDBContainer,MDBRow,MDBCol,MDBInput } from "mdbreact";

import './../css/design.css';
import offers_jpg2 from './../images/offers_jpg2.jpg';
import heartrate from './../images/heartrate.png';
import doctor from'./../images/oc_doctor.svg';
class ChatComp extends React.Component{

    state = {
        radio: 2
      }
      
      onClick = (nr) => () => {
        this.setState({
          radio: nr
        });
      }
    render() {
      return (
          
           
              <MDBRow className="pl-3 pr-3 mt-5 mt-5"  style={{
                backgroundImage: "url(" +doctor+ ")",
                backgroundPosition: 'right bottom',
              
                backgroundRepeat: 'no-repeat',
                textAlign:"left",
                padding:"10px",
                paddingBottom: "4rem"}}>
                <MDBCol lg="6" md="6" sm="12" xs="12">
    
               <h4 className="text-left"><b>Hey Welcome User, chat with our doctors for free</b></h4>
              
               <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>Why wasting time on booking appointments. Consult any doctor when you want.</p>
             <p className="my-4 text-left"  ><b>Feel free to tell</b></p>
        
             <div class="custom-control custom-radio text-left ">
<input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample"/>
<label class="custom-control-label blue-grey-text text-left" for="defaultInline1">I have fever</label>
</div>

<div class="custom-control custom-radio text-left">
<input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample"/>
<label class="custom-control-label blue-grey-text text-left" for="defaultInline2">I have hair related problems</label>
</div>

<div class="custom-control custom-radio text-left">
<input type="radio" class="custom-control-input" id="defaultInline3" name="inlineDefaultRadiosExample"/>
<label class="custom-control-label blue-grey-text text-left" for="defaultInline3">I have headache </label>
</div>
<div class="custom-control custom-radio text-left">
<input type="radio" class="custom-control-input" id="defaultInline4" name="inlineDefaultRadiosExample"/>
<label class="custom-control-label blue-grey-text text-left" for="defaultInline4">I have stomache</label>
</div>

      
<div class="input-group md-form form-sm form-2 w-75 pl-0" style={{border:'0.15rem solid #93a9ae',borderRadius: '2rem'}}>
  <input class="form-control my-0 py-1 light-blue-border" type="text" placeholder="Other then describe here " aria-label="Search" style={{backgroundColor:'white',borderLeft:'0.15rem solid #93a9ae',borderRadius: '2rem 0 0 2rem'}}/>
  <div class="input-group-append">
    <span class="input-group-text info-color pl-4" id="basic-text1" style={{borderRight:'0.15rem solid #93a9ae',borderRadius: ' 0 2rem 2rem 0 '}}><i class="fas fa-arrow-right fa-2x text-center text-white"></i></span>
  </div>
</div>

                </MDBCol>
            <MDBCol  lg="6" md="6" sm="12" xs="12">
            <h4 className="text-left"><b>Are you a Doctor?</b></h4>
            <p className=" blue-grey-text text-left mb-1" style={{fontSize:'0.9rem'}}>You can join us help people to improve their health with your help. Are you willing to serve people?</p>
            <MDBBtn style={{alignItems:'flex-start',display:'flex'}} color="info border_radious_20" className="mt-5" rounded >Join Now</MDBBtn>
            <MDBRow ></MDBRow>
            </MDBCol>

              </MDBRow>
              
             
    
        );
    }




}


export default ChatComp;