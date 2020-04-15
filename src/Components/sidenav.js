import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,MDBIcon,MDBFormInline,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
const alignstart={
  justifyContent:'flex-start',
display: 'grid'
}
const icon={
  fontSize:'1.5rem',
  color:'#546a75',
  marginTop:'0.5rem'
}
const hcolor={
  color:'#546a75',
  width:'80%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginRight: '3px',
  textAlign:'left',
  fontSize:'1.1rem'
}
const sidebox={
 
  borderRadius:'0.16rem'
}
const scrollsidebar={
  height: '12rem',

maxHeight: '12rem',

width: '100%',

overflowY: 'scroll'
}
const contentoverflow1={
  width:'100%',
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap',
marginRight: '3px',

}
const displayinline={
  display:'inline'
}
class Sidenav extends Component {
  state = {
    collapseID: '',
    collapseID1:'',
    collapseID2:'',
    collapseID3:''
    
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };
  toggleCollapse1 = collapseID1 => () => {
    this.setState(prevState => ({
      collapseID1: prevState.collapseID1 !== collapseID1 ? collapseID1 : ''
    }));
  };
  toggleCollapse2 = collapseID2 => () => {
    this.setState(prevState => ({
      collapseID2: prevState.collapseID2 !== collapseID2 ? collapseID2 : ''
    }));
  };
  toggleCollapse3= collapseID3 => () => {
    this.setState(prevState => ({
      collapseID3: prevState.collapseID3 !== collapseID3 ? collapseID3 : ''
    }));
  };
  render() {
    const { collapseID } = this.state;
    const { collapseID1 } = this.state;
    const { collapseID2 } = this.state;
    const { collapseID3 } = this.state;
    return (
      <Router>
       
       <MDBNavbar
            color='white'
            light
            style={ sidebox}
            className="p-1 mb-3"
          >
              <div  onClick={this.toggleCollapse('navbarCollapse0')} className="width100">
              <MDBNavbarBrand className="float-left " style={hcolor}><b>Health Conditions</b></MDBNavbarBrand>
            <MDBIcon
                icon={collapseID === 'navbarCollapse0' ? 'angle-up' : 'angle-down'} className="float-right " style={icon} 
              />
            
              </div>
            
              <MDBCollapse
                id='navbarCollapse0'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left style={scrollsidebar}>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="light-blue-text" to='#!'><b>Respiratory Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Stomach Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Diabetes Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Cardiac Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Eye Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Liver Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Pain Relief</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Cardiac Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart} >
                    <MDBNavLink className="blue-grey-text" to='#!'><b>Eye Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart}>
                    <MDBNavLink  className="blue-grey-text" to='#!'><b>Liver Care</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem  style={alignstart}>
                    <MDBNavLink  className="blue-grey-text" to='#!'><b>Pain Relief</b></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            
          </MDBNavbar>
      
      
      
          <MDBNavbar
            color='white'
            light
            style={ sidebox}
            className="p-1 mb-3"
          >
              <div  onClick={this.toggleCollapse1('navbarCollapse1')} className="width100">
              <MDBNavbarBrand className="float-left " style={hcolor}><b>Brands</b></MDBNavbarBrand>
            <MDBIcon
                icon={collapseID1 === 'navbarCollapse1' ? 'angle-up' : 'angle-down'} className="float-right " style={icon} 
              />
            
              </div>
            
            
            
            
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID1}
                navbar
              >
                
      <form class="form-inline d-flex justify-content-center md-form   form-sm active-gray-2 mx-0 mt-0 mb-1 "style={{borderBottom:'0.15rem solid #5c7375',width:'95%'}}>
  <input class="form-control form-control-sm m-0 w-75" type="text" placeholder="Search Brand"
    aria-label="Search" style={{border:'none'}}/>
  <i class="fas fa-search" aria-hidden="true"></i>
</form>
                <MDBNavbarNav  left style={scrollsidebar}>
                
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox ">
        <input type="checkbox" class="custom-control-input" id="defaultChecked" checked/>
        <label class="custom-control-label blue-text" for="defaultChecked"><b>Dabur</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked0"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked0"><b>Jiva</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked1"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked1"><b>Horlicks</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox" style={contentoverflow1}>
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked2"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked2" style={displayinline} ><b>Himalaya Wellness</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked3"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked3"><b>Inlife</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked4"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked4"><b>Mama Earth</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked5"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked5"><b>Sensodyne</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox" style={contentoverflow1}>
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked6"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked6" style={displayinline} ><b>Himalaya Wellness</b></label>
      </div>
                  </MDBNavItem>
                
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked7"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked7"><b>Dabur</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked8"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked8"><b>Jiva</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked9"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked9"><b>Horlicks</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox" style={contentoverflow1}>
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked10"/>
        <label class="custom-control-label blue-grey-text" for="defaultUnchecked10" style={displayinline} ><b>Himalaya Wellness</b></label>
      </div>
                  </MDBNavItem>
                
                
                
                </MDBNavbarNav>
              </MDBCollapse>
            
          </MDBNavbar>
          <MDBNavbar
            color='white'
            light
            style={ sidebox}
            className="p-1 mb-3"
          >
              <div  onClick={this.toggleCollapse2('navbarCollapse2')} className="width100">
              <MDBNavbarBrand className="float-left " style={hcolor}><b>Discount</b></MDBNavbarBrand>
            <MDBIcon
                icon={collapseID2 === 'navbarCollapse2' ? 'angle-up' : 'angle-down'} className="float-right " style={icon} 
              />
            
              </div>
            
            
            
            
              <MDBCollapse
                id='navbarCollapse2'
                isOpen={this.state.collapseID2}
                navbar
              >
               
                <MDBNavbarNav  left style={scrollsidebar}>
                
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox ">
        <input type="checkbox" class="custom-control-input" id="defaultCheckedd" checked/>
        <label class="custom-control-label blue-text" for="defaultCheckedd"><b>Less than 10%</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd0"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd0"><b>10% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd1"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd1"><b>20% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox" style={contentoverflow1}>
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd2"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd2" style={displayinline} ><b>30% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd3"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd3"><b>40% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd4"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd4"><b>50% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd5"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd5"><b>60% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd6"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd6"><b>70% and more</b></label>
      </div>
                  </MDBNavItem>
                
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd7"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd7"><b>80% and more</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedd8"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedd8"><b>90% and more</b></label>
      </div>
                  </MDBNavItem>
                
                </MDBNavbarNav>
              </MDBCollapse>
            
          </MDBNavbar>
          <MDBNavbar
            color='white'
            light
            style={ sidebox}
            className="p-1 mb-3"
          >
              <div  onClick={this.toggleCollapse3('navbarCollapse3')} className="width100">
              <MDBNavbarBrand className="float-left " style={hcolor}><b>Product Forms</b></MDBNavbarBrand>
            <MDBIcon
                icon={collapseID3 === 'navbarCollapse3' ? 'angle-up' : 'angle-down'} className="float-right " style={icon} 
              />
            
              </div>
            
            
            
            
              <MDBCollapse
                id='navbarCollapse3'
                isOpen={this.state.collapseID3}
                navbar
              >
                  <form class="form-inline d-flex justify-content-center md-form   form-sm active-gray-2 mx-0 mt-0 mb-1 "style={{borderBottom:'0.15rem solid #5c7375',width:'95%'}}>
  <input class="form-control form-control-sm m-0 w-75" type="text" placeholder="Search Products"
    aria-label="Search" style={{border:'none'}}/>
  <i class="fas fa-search" aria-hidden="true"></i>
</form>
 
    
                <MDBNavbarNav  left style={scrollsidebar}>
                
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox ">
        <input type="checkbox" class="custom-control-input" id="defaultCheckedp" />
        <label class="custom-control-label blue-text" for="defaultCheckedp"><b>Powder</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp0"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp0"><b>Capsule</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp1" checked/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp1"><b>Tablet</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox" style={contentoverflow1}>
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp2"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp2" style={displayinline} ><b>Oil</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp3"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp3"><b>Toothpaste</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp4"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp4"><b>Cream</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp5"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp5"><b>Shampoo</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox" style={contentoverflow1}>
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp6"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp6" style={displayinline} ><b>Powder</b></label>
      </div>
                  </MDBNavItem>
                
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp7"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp7"><b>Tablet</b></label>
      </div>
                  </MDBNavItem>
                  <MDBNavItem style={alignstart}>
                  <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedp8"/>
        <label class="custom-control-label blue-grey-text" for="defaultUncheckedp8"><b>Oil</b></label>
      </div>
                  </MDBNavItem>
                 
                
                </MDBNavbarNav>
              </MDBCollapse>
            
          </MDBNavbar>
         
      
      
      
      </Router>
    );
  }
}

export default Sidenav;