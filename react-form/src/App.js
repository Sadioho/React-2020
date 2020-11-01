import React, {Component} from 'react'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
       txtName:'',
       txtPassword:'',
       txtDesc:''
    }
  }
  onHandleChange=(event)=>{
   var target=event.target; //event.target event tới từng ô input
    var name=target.name;//phaan bieejt tung o in put bang name
    var value=target.value; //lấy giá trị từng ô input phụ thuopjc vào name
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
          onChange={this.onHandleChange}
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password </label>
          <input 
          type="password" 
          className="form-control" 
          name="txtPassword"
          onChange={this.onHandleChange}
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Status</label>
          <textarea
            className="form-control"
            rows="3"
            name="txtDesc"
            onChange={this.onHandleChange}
          >

          </textarea>
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
