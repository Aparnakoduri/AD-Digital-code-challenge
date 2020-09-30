import React, { Component } from 'react';


export default class Sizebuttons extends Component {
    
    render(){
    
        return (
            <div>
                 <button onClick={this.props.click8} className="btn btn-black btn-sm ml-1000">8gb</button>
                 <button onClick={this.props.click16} className="btn btn-black btn-sm ml-1000">16gb</button>
                 <button onClick={this.props.click32} className="btn btn-black btn-sm ml-1000">32gb</button>
                 <span className="badge badge-primary m-2">{this.props.size}gb</span>
                </div>
        )
    }
}
