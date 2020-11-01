import React, { Component } from 'react';

class ContentColor extends Component{
     
    setStyle(){
        return {
            color: this.props.color,
            fontSize:this.props.fontSize
           
           
        }
    }
    render() {
        return(
        <div className="col-12" >
            <p  className="alert-info mb-0 p-2 ">Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
            <div id="content" style={this.setStyle()} >
            Colorrrrr 
            </div>
         </div>
        );
    }
} 


export default ContentColor;