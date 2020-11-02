import React, { Component } from 'react'
import Header from './components/Header'
import ColorPicker from './components/ColorPicker'
import ContentColor from './components/ContentColor'
import Size from './components/Size'
import Reset from './components/Reset'
import './style.css'


class App extends Component{
    //tạo 1 state lưu trữ giá trị ban đầu của kết quả hiển thị của component ContentColor
    constructor(props) {
        super(props);
        this.state={
            // mau va font mat dinh
            color:'red',
            fontSize:12 
        }
        // this.onSetColor=this.onSetColor.bind(this);
    }
    onSetColor=(params)=>{
        this.setState({
            color:params
        })
    }
    // Muốn dùng cách này thì bind trên contructor
    // onSetColor(params){
    //     // console.log(params);
    //     this.setState({
    //         color:params
    //     })
    // }
    //khi truyền dữ liệu từ thằng con ra thằng cha ngược lại thì dùng 1 props và nhận lại 1 func 
    //lúc này thằng con sẽ nhận cái props đó và truyền dữ liệu ra cho thằng cha
    onChangSize=(value)=>{
        this.setState({
            fontSize: (this.state.fontSize+value>=8 && this.state.fontSize+value<=36) ? this.state.fontSize+value:this.state.fontSize
        })
    }
    onSettingDefault=(value)=>{
        if(value){
            this.setState({
                color:'red',
                fontSize:12
            })
        }
    }
    render() {
        return(
            <div className="container-fluid">
               <Header/>
               <div className="container">
                   <div className="row">
                   {/* gữi thuộc tính color qua cho ColorPicker lúc này file app có thể dùng props để truy vấn đến cái color ở đây */}
                    {/* ở đây chúng ta tạo thêm 1 cái props là onRecevieColor để lấy dữ liệu từ thằng con là ColorPicker*/}
                      <ColorPicker color={this.state.color} onRecevieColor={this.onSetColor}></ColorPicker>
                      <Size fontSize={this.state.fontSize}
                       onChangSize={this.onChangSize}></Size>
                   </div>
                   <Reset onSettingDefault={this.onSettingDefault}></Reset>
                   <div className="row">
                   <ContentColor color={this.state.color} fontSize={this.state.fontSize}></ContentColor>
                   </div>
               </div>
            </div>
        );
    } 
}


export default App;