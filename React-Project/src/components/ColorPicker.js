import React, { Component } from 'react';


class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            colors:['red','green','blue','gray']
        };
    }
    //set background cho từng span
    
    showColor(color){
        // console.log(this.props.color); // dùng props để nhận cái giá trị color ở bên app gữi qua
  //kiểm tra nếu như props color bên app bằng color ở state colors: trên
        return{
           backgroundColor:color 
       }
    }
  
    //setactivColor 
    //khi gọi như thế này thì nó sẽ trả ra thành cái biến param ở bên app
    setAciveColor(color){
        this.props.onRecevieColor(color);
       
    }
    render() {
        //Biến elmcolor để chứa các cái màu
        var elmColor=this.state.colors.map((color,index)=>{
            //style={this.showColor(color)gọi đến 1 function 
            return <span 
            key={index} 
            style={this.showColor(color)} 
            // nếu this.props.color color này nằm ở bên App gữi qua bằng với colors ở state thì set cho nó kì class là actives 
            className={this.props.color === color ? 'actives p-3' : 'p-3 m-2'}
           //gọi sự kiện onclick để khi click vào màu nào thì nó sẽ set acitve cho màu đó
            onClick={()=>{this.setAciveColor(color)}}
                    ></span>
        })
        return(
        <div className="col-6 border p-1">
            <div className="alert bg-info text-dark font-weight-bold "> Color Picker</div>
            <div className="m-4">
               {elmColor}
            </div>
        </div>
    
        );
    }
} 


export default ColorPicker;