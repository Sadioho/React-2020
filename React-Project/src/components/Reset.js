import React, { Component } from 'react';

class Reset extends Component{
    onResetDefault=()=>{
        this.props.onSettingDefault(true);
    }
    render() {
        return(
        <button className="btn btn-primary mt-2 mb-2" onClick={this.onResetDefault}>Reset</button>
        );
    }
}


export default Reset;