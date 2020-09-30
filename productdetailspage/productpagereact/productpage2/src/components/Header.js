import React,{Fragment,Component} from 'react';
import {logo} from './home logo.svg';
import{Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <Fragment>
                <hr size="8" color="teal"/>
                <div className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <a
                     className="myaboutus"
                     href="https://www.apple.com/in/"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                        About us
                    </a>
                    <Link to="/">

                    <img src={logo} className="App-logo" alt="Home" />
                        
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/Products_services" className="nav-link">
                                Products&services
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/Myaccount" className="nav-link">
                                Myaccount
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/Products_services" className="nav-link">
                                Support
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/Myaccount" className="nav-link">
                                Offers
                            </Link>
                        </li>
                    </ul>
                </div>
                    
    
                <hr/>
            </Fragment>
           
        )
    }
}

export default Header