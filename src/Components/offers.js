import React from "react";
import { MDBBtn, MDBContainer,MDBRow,MDBCol , MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from "mdbreact";

import './../css/design.css';
import offers_jpg2 from './../images/offers_jpg2.jpg';
import heartrate from './../images/heartrate.png';
import heartrate_left from './../images/heartrate_for_left.png';
import heartrate_right from './../images/heartrate_for_right.png';
var tcenter={
  justifyContent:'center',
display:'grid'
};
const Offer = () => {
  return (
      <div style={{
        backgroundImage: "url(" +offers_jpg2+ ")",
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        textAlign:"left",
        padding:"10px",
        paddingBottom: "4rem"
      }}>
      
          <MDBRow> <MDBCol lg="12" md="12" sm="12" xs="12"><h3 className="id1 text-center py-1 fhshrink" style={{color: '#4f4646'}}><img src={heartrate_left} className="imgshrink"></img><b>Offers</b><img src={heartrate_right} className="imgshrink"></img></h3></MDBCol></MDBRow>
          <MDBRow>
          
            <MDBCol lg="6" md="6" sm="12" xs="12" style={tcenter}> 
            <h1 className="id2 text-center fhshrink">Get 0-70% discount  </h1> 
            <h5 className="id2 text-center pb-5">On all types of medicine</h5>
            <br/>
            <p  className="id2 text-danger text-center">Deals of the day ends in</p>
            <br/>
            {/* <h4  className="id2 text-danger ">04:00:10</h4>
            <br/>
            <MDBBtn  className="id2" rounded color="primary">Order Now</MDBBtn> */}
              <MDBCard style={{margin:'auto',width:'60%' }}> 
                <MDBCardBody className="text-center">
                  <MDBCardTitle><h4  className="text-center text-danger ">04:00:10</h4></MDBCardTitle>
                  <MDBBtn color='info' className="btn-info w-75 fbshrink order-btn">Order Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
           <MDBCol  lg="6" md="6" sm="0" xs="0"></MDBCol>
          </MDBRow>
       

</div>
    );
}

export default Offer;