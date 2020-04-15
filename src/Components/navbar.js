import React, { Component } from "react";

import {MDBNavLink,MDBDropdown,MDBDropdownToggle,MDBDropdownItem,MDBDropdownMenu,
MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse, MDBContainer,MDBListGroup, MDBListGroupItem

} from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
//import { FaShoppingCart } from 'react-icons/fa';
import './../css/styling.css';
import './../css/button1.css';


import{ MDBRow, MDBCol,MDBBtn} from "mdbreact";
import { Link } from 'react-router-dom';
const rowpad = {
  marginLeft:0,
  marginRight:0
};
const alignContent={
  alignItems:'stretch',
  justifyContent:'space-between',
  width:'100%'
}
const incswidth={
  width:'100%'
}
const shadow={
  boxShadow:'none'
}
const stext={
  textTransform:'capitalize'
}
const shadow1={
  boxShadow:'0 0 10px #45a3c8'
}
const buttonborder={
  border:'0.1rem solid #33b5e5',
  color:'#33b5e5'
}
const bgcolor={
  backgroundColor:'#fff0'
}
const inborder={
  border:'1px solid rgb(189, 198, 200)'
}
const bnone={
  borderBottom:'none'
}
class Navbar extends Component {
state = {
  isOpen: false
};


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });


}


render() {
  return (
    <Router>
     
      
        
      <MDBNavbar className="black-text font1 fontsize1" dark expand="lg">
        <MDBNavbarBrand>
        <strong className="black-text"><Link to="/" onClick={event =>  window.location.href='/'} >Your Logo </Link></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!"><MDBBtn rounded color="info btn-sm border_radious_20"   style={shadow}><b>MEDICINE</b></MDBBtn></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/ConsultDoctor"><MDBBtn rounded color="info btn-sm border_radious_20"  onClick={event =>  window.location.href='/ConsultDoctor'}><b>CONSULT A DOCTOR</b></MDBBtn></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"><MDBBtn rounded color="info btn-sm border_radious_20"  style={shadow}><b>BOOK APPOINTMENT</b></MDBBtn></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          
            <MDBNavItem>
           
            <MDBIcon icon="shopping-cart fa-2x mx-4 mt-2" className="btn-head"/>
              
              
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn outline color="dark btn-md btn-head" style={{...shadow,...stext}} onClick={event =>  window.location.href='/LoginPage'}>Login</MDBBtn>
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn outline color="dark btn-md btn-head" style={{...shadow,...stext}} onClick={event =>  window.location.href='/RegisterPage'}>Register</MDBBtn>
            </MDBNavItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
      <hr style={{marginTop:0,marginBottom:0}}/>
      
   
      <MDBRow style={rowpad} >
        <MDBCol lg="4" md="6" sm="12" xs="12">
      <div className="input-group md-form form-sm form-1 pl-0 " style={{...bgcolor,...inborder}}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-text1" style={bgcolor}>
            <MDBIcon className="text-gray" icon="map-marker-alt" />
          </span>
        </div>
        <input className="form-control my-0 font1 fontsize1" type="text" placeholder="Enter Delivery Location" style={{...bgcolor,...bnone}} aria-label="Search" />
      </div>

</MDBCol>

<MDBCol lg="4" md="6" sm="12" xs="12">
      <div className="input-group md-form form-sm form-1 pl-0"  style={{...bgcolor,...inborder}}>
        <div className="input-group-prepend">
          <span className="input-group-text  lighten-3" id="basic-text1" style={bgcolor}>
            <MDBIcon className="text-gray" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 font1 fontsize1" type="text" placeholder="Search Medicine"  style={{...bgcolor,...bnone}} aria-label="Search" />
      </div>

</MDBCol>

    

    <MDBCol lg="4" md="12" sm="12" xs="12">
    

   
    <MDBBtn color="info mt-4 btn btn-md float-lg-right float-xl-right font1 fontsize1" style={{textTransform:'capitalize'}}><b>Upload Prescription</b></MDBBtn> 
    
   
       
    
   
    </MDBCol>
    </MDBRow>
   




   




<ul className="list-group list-group-horizontal-md pb-2 pl-3 pr-3 font1 fontsize3" style={alignContent}>
  <li className="list-group-item btn_pdd" style={incswidth} >
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      Winter Care
      </MDBDropdownToggle>
      <MDBDropdownMenu >
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </li>
  <li className="list-group-item btn_pdd" style={incswidth}><MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
     Featured
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      Fitness &amp; Supplements
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      Diabetes
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      HealthCare Devices
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      Personal Care
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      Health Conditions
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown className="fontsize3">
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white">
      Ayurveda Products
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
  <li className="list-group-item btn_pdd" style={incswidth}>
  <MDBDropdown >
      <MDBDropdownToggle size="sm" style={{boxShadow:"none", margin:0,padding:0}} caret color="white"  className="fontsize3">
      Homeopathy
      </MDBDropdownToggle>
      <MDBDropdownMenu  className="fontsize3" basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></li>
</ul>




    </Router>
   
    );
  }
}

export default Navbar;