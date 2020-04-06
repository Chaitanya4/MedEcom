import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import ProductDescription from './Pages/productdescription';
import * as serviceWorker from './serviceWorker';
import ProductListing from './Pages/productlisting';
import { Provider } from 'react-redux';
import ConsultDoctor from './Pages/consultadoctor';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer'
import thunk from 'redux-thunk';
const store = createStore(reducers, {}, applyMiddleware(thunk)); 
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
     document.getElementById('root'));  

 
serviceWorker.unregister();
