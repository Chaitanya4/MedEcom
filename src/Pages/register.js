import React from "react";
import { MDBContainer, MDBInput,MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const RegisterPage = () => {
  return (
    <MDBContainer>
       
      <MDBRow>
          <MDBCol lg="4" md="3" sm="0"></MDBCol>
        <MDBCol lg="4" md="6" sm="12">
          <MDBCard className="mt-4 mb-4">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Register</p>
                
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Username or Email"
                />
                <br />
                
                <input
                  type="password"
                  id="defaultFormCardEmailPass"
                  className="form-control"
                  placeholder="Enter Password"
                />
                <br/>
                <input
                  type="password"
                  id="defaultFormCardEmailPass"
                  className="form-control"
                  placeholder="Re-enter Password"
                />

<MDBInput label="Remember Password" filled type="checkbox" id="checkbox1" className="form-control" />
                 <MDBBtn color="black"   className="form-control ml-0 mr-0" rounded>Register Here</MDBBtn>
      <p className="text-center">Already have an account <a href="#">Login</a> Here</p>
               
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBCol lg="4" md="3" sm="0"></MDBCol>

    </MDBContainer>
  );
};

export default RegisterPage;