import React, { Component } from 'react';
import Imageagllery from './Imagegallery';



export default class Productdetailspage extends Component{
    render(){
        return (
            <React.Fragment>
                <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Imageagllery/>
                        </li>
                </ul>
                
            </React.Fragment>
        )
    }
}

