import React, { Component } from 'react';
import '../App.css';
import backside from '../img/backside.png';
import blackapple from '../img/black apple.png';
import blueapple from '../img/blue apple.png';
import body from '../img/body.png';
import lens from '../img/lens.png';
import Productdata from './Productdata';


export default class Imagegallery extends Component {

    state = {
        index: 0, 
        gallery: [backside, blackapple, blueapple, body, lens]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.gallery.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.gallery.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
              <p className="alignleft">
              <img src={this.state.gallery[this.state.index]} className="img-fluid" alt="" />
              </p>
              <p className="alignright display-inline:true">
              <Productdata/>
              </p>
              <p className="center">
              <button className="btn btn-info m-2" style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Prev </button>
              <button className="btn btn-info m-2" style={{"fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
              </p>
                  
          </div>
        );
      }

}

          
        
        

          