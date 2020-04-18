import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,MDBInput } from 'mdbreact';
import './../css/design.css';
const LoginPage = () => {
  return (
  
      <MDBRow className="mt-4 mb-4 ml-0 mr-0">
        <MDBCol md="4">
          <MDBCard className="#bdbdbd grey lighten-1">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-3 text-white">Login</p>
                <input
                  type="email"
                  id="defaultFormCardemailEx"
                  className="form-control border border-white #bdbdbd grey lighten-1" placeholder="Email or Phone" 
                />
                <br />
              
                <input
                  type="password"
                  id="defaultFormCardPasswordEx"
                  className="form-control border border-white #bdbdbd grey lighten-1" placeholder="Enter Password"
                />
              <div class="custom-control custom-checkbox mt-3">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label text-white" for="defaultUnchecked">Remember Password</label>
      </div>
        <div className="text-center py-4 mt-3 " >
                  <MDBBtn className="btn-white border border-white w-100" style={{borderRadius:'3rem'}} type="submit">
                   Login
                  </MDBBtn>
                </div>
                <p className="text-center text-white">Don't have an account. <a herf="/RegisterPage" style={{color:'blue'}} onClick={event =>  window.location.href='/RegisterPage'}>Register</a> Here</p>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
   
  );
};

export default LoginPage;