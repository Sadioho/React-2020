import React, { Component } from 'react';

class Size extends Component{
  changeSize(value){
    this.props.onChangSize(value)
  }



    render() {
        return(
            <div className="col-6 border p-1">
            <div className="alert bg-warning text-dark font-weight-bold ">
              Size :{this.props.fontSize} px
            </div>
            <button type="button" className="btn btn-success mr-2 mb-4" onClick={()=>this.changeSize(-2)}>Giảm</button>
            <button type="button" className="btn btn-success mr-2 mb-4"onClick={()=>this.changeSize(2)}>Tăng</button>
          </div>
        );
    }
}


export default Size;