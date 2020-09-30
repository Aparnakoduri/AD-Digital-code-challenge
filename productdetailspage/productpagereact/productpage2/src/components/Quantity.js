import React, { Component } from 'react';


export default class Quantity extends Component {

    state={ 
        counti:0,
        value:this.props.price,
        instock:this.props.count
    };
    
    addtocart=()=>{
        this.setState({counti:this.state.counti+1});
    };

    removefromcart=()=>{
        this.setState({counti:(this.state.counti <= 0 ? 0 :this.state.counti-1)});
        
    }

    counting(){
        return this.state.counti <= 0 ? 0 :this.state.counti;
    }
    
    totalcost(){
        if(this.instock()==="In stock")
        return this.state.counti <= 0 ?  '': ":"+this.props.price*this.state.counti;

    }
    instock(){
        return this.props.count>this.state.counti ? "In stock": "Out of stock";
    }
    
    render() {
        return (
            <div>
                <center>
                <button onClick={this.addtocart} className="btn btn-primary btn-sm ml-1000">
                    Add Item
                </button>
                <span className="badge badge-dark m-2">{this.counting()}</span>
                
                <button onClick={this.removefromcart} className="btn btn-danger btn-sm ml-1000">
                    Remove Item
                </button>
                </center>
                <span className="badge badge-dark m-2">{this.instock()}</span>
                <strong>
                    Totalcost
                </strong>
                <span>
                {this.totalcost()}
                </span>
                
            </div>
        );
    }
    
}
