import React, { Component } from 'react'

export default class Colouruttons extends Component {

    render() {
        return (
            
                <div>
                 <button onClick={this.props.click1} className="btn btn-dark btn-sm ml-1000">Black</button>
                 <button onClick={this.props.click2} className="btn btn-primary btn-sm ml-1000">Blue</button>
                 <button onClick={this.props.click3} className="btn btn-danger btn-sm ml-1000">Red</button>
                 <span className="badge badge-primary m-2">{this.props.colour}</span>
                </div>
        
        )
    }
}
