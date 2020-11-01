import React, { Component } from 'react';
class Product extends Component{
  //cách 3
    constructor(props){
        super(props);
       this.onAddToCart=this.onAddToCart.bind(this);
     
    }
    onAddToCart(){
        alert(this.props.children +' - '+this.props.price)
        console.log(this.props.children)
    }



    //cách 4
    onAddToCart2=()=>{
        alert(this.props.children +' - '+this.props.price)
    }

    render() {
        return(
            <div className="card col-sm-3">
                    <img className="card-img-top" src={ this.props.img} alt={this.props.name}></img> 
                    <div className="card-body">
                        <h5 className="card-title">{this.props.children}</h5>
                        <p className="card-text">{this.props.price}</p>
                        <a href="# " className="btn btn-primary" onClick={this.onAddToCart2} >Buy Now</a>
                        <a href="# " className="btn btn-primary" onClick={this.onAddToCart} >Buy Now</a>
                     </div>
            </div>
            
        );
    }
}


export default Product;