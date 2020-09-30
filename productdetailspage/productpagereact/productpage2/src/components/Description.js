import React, { Component } from 'react';

export default class Description extends Component {
    
    render() {
                return (
                  <div >
                    <h1>
                      {this.props.title}
                    </h1>
                      <h4>Model:{this.props.title}</h4>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Manufacturer: <span className="text-uppercase">{this.props.company}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          Price: <span>${this.props.price}</span> 
                        </strong>
                      </h4>
                      <p>
                          <h3>ProductDescription:</h3>{this.props.info}
                      </p>
                    </div>
        );
        
}
}
