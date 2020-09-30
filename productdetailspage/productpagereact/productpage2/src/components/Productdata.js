import Axios from 'axios';
import React, { Component } from 'react'
import Description from './Description';
import Quantity from './Quantity';
import Sizebuttons from './Sizebuttons';
import Colourbuttons from './Colourbuttons';
import MCd from '../img/mcd.png';
import Macpc from '../img/macpc.png';

class Productdata extends Component {
    
    constructor(props) {
        super();
        this.state = {
            product:{}
    };
   
    }


    getDetails=(e)=>{
           const id=e;
            console.log(e);
            Axios.get(`http://localhost:8080/products/${id}`)
            .then(res=>{
            console.log(res);
            this.setState({product:res.data});
     });
        }
    // updatecart(id,count) {
    //     this.props.history.push(`/products/${id}`)
    //   }
    
    
    async componentDidMount()
    {
        console.log("component did mount")
        //console.log(myid)
        const id=1;
     await Axios.get(`http://localhost:8080/products/${id}`)
     .then(res=>{
        console.log(res);
        this.setState({product:res.data});
     });
    }
    

    render() {

        return (
            
                <div>
                    <Description title={this.state.product.title}  price={this.state.product.price} company={this.state.product.company} info={this.state.product.info}/>
                    <Quantity price={this.state.product.price} count={this.state.product.count}/>
                    <Sizebuttons click8={this.getDetails.bind(this,"1")}
                                click16={this.getDetails.bind(this,"4")}
                                click32={this.getDetails.bind(this,"7")}
                                size={this.state.product.size}/>
                    <Colourbuttons click1={this.getDetails.bind(this,"1")}
                                click2={this.getDetails.bind(this,"5")}
                                click3={this.getDetails.bind(this,"9")}
                                colour={this.state.product.colour}/>  
                    <br/>
                    <div>
                    <h3>Promotions</h3>
                    <img 
                     src={MCd} className="img-fluid" alt="" />
                    </div>
                    <h3>Related Products</h3>
                    <center>
                    <img 
                     src={Macpc} className="img-fluid" alt="" />
                    </center>
                    
                    
                </div>
            
        )
    }
}

export default Productdata
