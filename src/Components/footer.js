import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="grey" className=" text-white font-small pt-4 footer-copyright text-center ">
    
     
        <div fluid  className="ml-0 mr-0" >
       <b> Copyright &copy; {new Date().getFullYear()} . All Rights Reserved</b>
        </div>
      
    </MDBFooter>
  );
}

export default Footer;