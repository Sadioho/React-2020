import React, {Component} from 'react'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
       txtName:'',
       txtPassword:'',
       txtDesc:'',
       sltGender:0,
       rdLang:'vi',
       chkbStatus: true
    }
  }
  onHandleChange=(event)=>{
   var target=event.target; //event.target event tới từng ô input
    var name=target.name;//phaan bieejt tung o in put bang name
    // var value=target.value; //lấy giá trị từng ô input phụ thuopjc vào name
    var value=target.type==='checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value
    })
  
  
  }
  onHandleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);
  }
  
  
  render(){
    return(
     <div className="container">
       <div className="row">
        <form onSubmit={this.onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserName </label>
          <input 
          type="text" 
          className="form-control" 
          name="txtName"
          value={this.state.txtName}
          onChange={this.onHandleChange}
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password </label>
          <input 
          type="password" 
          className="form-control" 
          name="txtPassword"
          value={this.state.txtPassword}
          onChange={this.onHandleChange}
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Status</label>
          <textarea
            className="form-control"
            rows="3"
            name="txtDesc"
            value={this.state.txtDesc}
            onChange={this.onHandleChange}
          >
          </textarea>
        </div>
        <label>Giới Tính:</label>
        <select 
        className="form-control" 
        name="sltGender"
        value={this.state.sltGender}
        onChange={this.onHandleChange}
        >
            <option value={0} >Nữ</option>
            <option value={1} >Nam</option>
        </select>
        <br></br>
        <div className="radio">
        <label>Ngôn ngữ</label> <br></br>
          <label>
            <input 
            type="radio" 
            name="rdLang" 
            value="vi" 
            onChange={this.onHandleChange}
            checked={this.state.rdLang==='vi'}
            /> VI
          </label>
          <br></br>
          <label>
            <input 
            type="radio" 
            name="rdLang" 
            value="en"
            onChange={this.onHandleChange}
            checked={this.state.rdLang==='en'}
            /> EN
          </label>
        </div>

        <div className="checkbox">
          <label>
            <input  
            type="checkbox" 
            name="chkbStatus"
            value={true}
            onChange={this.onHandleChange}
            checked={this.state.chkbStatus===true}

            />
             Status
          </label>
        </div>
        

        <button type="submit" className="btn btn-info">Xac Nhan</button>
            <button type="reset" className="btn btn-light">Xoa Trang</button>
        </form>
       </div>
     </div>
    );
}
}

export default App;
