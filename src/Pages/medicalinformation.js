import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class MedicalInfo extends React.Component {
 

  render() {
    return (
      <div  className=" pt-4 pb-4" style={{backgroundColor: '#d6d7e8',position:'absolute',minHeight:'100%'}}>
          <MDBRow className="mt-0 ml-4 mr-4 " style={{backgroundColor: 'white',borderRadius: '0.5rem'}}>
          <MDBRow className="ml-2 mr-2 w-100">
          <h4 className=" pb-0 ml-4 pl-1 mt-2 w-100"><b  id="line" >Medical Information<span></span></b></h4>
        <MDBCol lg="9" md="12" sm="12">    
            <form className="w-100 mx-3">

<MDBRow >
    <MDBCol lg="3" md="6" className="my-2"> 

 

<input
type="text"
className="form-control"
id="formGroupExampleInput" placeholder="Medical Name"
/>


</MDBCol>
    <MDBCol lg="3" md="6" className="my-2"> 

<input
type="date"
className="form-control"
id="formGroupExampleInput" placeholder="Medical Since"
/>

</MDBCol>
<MDBCol lg="3" md="6" className="my-2">  
  

  <input
  type="text"
  className="form-control"
  id="formGroupExampleInput" placeholder="Phone"
  />
  
  
  </MDBCol>
      <MDBCol lg="3" md="6" className="my-2"> 
  
     
  
  <input
  type="text"
  className="form-control"
  id="formGroupExampleInput" placeholder="Email"
  />
  
  
  </MDBCol>
  
    </MDBRow>
    <MDBRow >
  <MDBCol lg="6" md="12" className="my-2">  

<input
type="text"
className="form-control"
id="formGroupExampleInput" placeholder="Address"
/>

</MDBCol>
    <MDBCol lg="3" md="6" className="my-2">  
    <select className="browser-default custom-select">
          <option>State</option>
          <option value="1">M.P.</option>
          <option value="2">Kerala</option>
          <option value="3">Gujarat</option>
        </select>
</MDBCol>
    <MDBCol lg="3" md="6" className="my-2"> 

    <select className="browser-default custom-select">
          <option>City</option>
          <option value="1">Indore</option>
          <option value="2">Bhopal</option>
          <option value="3">Ujjain</option>
        </select>

</MDBCol>
    </MDBRow>
    <MDBRow >
    <MDBCol lg="3" md="6" className="my-2">

<input
type="text"
className="form-control"
id="formGroupExampleInput" placeholder="Zip/Postal Code"
/>

</MDBCol>
    <MDBCol lg="3" md="6" className="my-2"> 

    <select className="browser-default custom-select">
          <option>Country</option>
          <option value="1">India</option>
          <option value="2">Japan</option>
          <option value="3">Nepal</option>
        </select>

</MDBCol>

</MDBRow>                             
</form>

</MDBCol>
        <MDBCol lg="3" md="12" sm="12" className="pl-5 pr-5" style={{display:'grid',justifyContent:'center'}}>
            <div className=" border border-gray ml-4 mr-4 mt-1 h-75 w-100">
            <i class="fas fa-box  my-4 d-flex align-content-center justify-content-center" style={{color: 'gainsboro',fontSize:'50px'}}></i>
            </div>
            <MDBBtn color="info" className="ml-4 mr-4 mt-1 p-1 w-100" style={{borderRadius:'2rem'}}>Upload</MDBBtn>

        </MDBCol>
         </MDBRow>
          <MDBRow className="w-100 mx-0">
          <MDBCol lg="8" md="0" sm="0">
          
          </MDBCol>

          <MDBCol lg="4" md="12" sm="12" className="d-flex justify-content-center px-0">
          <MDBBtn color="prev" className="btn-sm ml-2 mr-2 mt-5 mb-2 py-2 px-4 prev" style={{borderRadius:'2rem'}}>Previous</MDBBtn>
      <MDBBtn color="info" className="btn-sm ml-2 mr-2 mt-5 mb-2  py-2 px-4" style={{borderRadius:'2rem'}}>Save</MDBBtn>
      <MDBBtn color="prev" className="btn-sm ml-2 mr-2 mt-5 mb-2 py-2 px-4 prev" style={{borderRadius:'2rem'}}>Cancel</MDBBtn>

          </MDBCol>

          </MDBRow>
          
     
         
       
          </MDBRow>
          </div>
    );
  }
}

export default MedicalInfo;