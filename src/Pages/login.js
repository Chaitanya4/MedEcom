import React from "react";
import { MDBContainer, MDBInput,MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const LoginPage = () => {
  return (
    <MDBContainer>
       
      <MDBRow>
          <MDBCol lg="4" md="3" sm="0"></MDBCol>
        <MDBCol lg="4" md="6" sm="12">
          <MDBCard className="mt-4 mb-4">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Login</p>
                
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Username or Email"
                />
                <br />
                
                <input
                  type="password"
                  id="defaultFormCardEmailpass"
                  className="form-control"
                  placeholder="Enter Password"
                />

<MDBInput label="Remember me" filled type="checkbox" id="checkbox1" className="form-control" />
                 <MDBBtn color="black"   className="form-control ml-0 mr-0" rounded>Login Here</MDBBtn>
      <p className="text-center">Don't have a account <a href="#">Register</a> Here</p>
               
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBCol lg="4" md="3" sm="0"></MDBCol>

    </MDBContainer>
  );
};

export default LoginPage;