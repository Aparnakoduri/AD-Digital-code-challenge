import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products_services from './components/Products_services';
import Myaccount from './components/Myaccount';
import Productdetailspage from './components/Productdetailspage';



function App() {
  return (
    <React.Fragment>
       <Header/>
       
       <Switch>
          <Route exact path="/" component={Productdetailspage}/>
          <Route path="/Products_services" component={Products_services}/>
          <Route path="/Myaccount" component={Myaccount}/>
       </Switch>
       <Footer/>
    </React.Fragment>
  );
}

export default App;
