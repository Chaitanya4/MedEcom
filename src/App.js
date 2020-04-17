import React from 'react'; 
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import homeComponent from './Pages/home';
import ConsultDoctor from './Pages/consultadoctor';
import ProductDescription from './Pages/productdescription';
import ProductDescription1 from './Pages/productdescription1';
import ProductDescription2 from './Pages/productdescription2';
import ProductListing from './Pages/productlisting';
import ProductListing1 from './Pages/productlisting1';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';

import MyComponent from './Pages/demo';
//import FetchRandomUser from './Pages/demo2';
import MyForm from './Pages/demoform';
function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={homeComponent} />
       
        <Route path="/home" component={homeComponent} /> 
        <Route path="/ConsultDoctor" component={ConsultDoctor} /> 
        <Route path="/ProductDescription" component={ProductDescription} /> 
        <Route path="/ProductDescription1" component={ProductDescription1} /> 
        <Route path="/ProductDescription2" component={ProductDescription2} /> 
        <Route path="/ProductListing" component={ProductListing} /> 
        <Route path="/ProductListing1" component={ProductListing1} /> 
        <Route path="/LoginPage" component={LoginPage} /> 
        <Route path="/RegisterPage" component={RegisterPage} /> 
        <Route path="/BrandList" component={MyComponent} /> 
        <Route path="/SubmitBrand" component={MyForm} /> 
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  </React.Fragment> 
  );
}

export default App;
