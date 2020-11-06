import React, { Component } from 'react'
import Header from './components/Header'
import MoreJobs from './components/MoreJobs'
import TableJobs from './components/TableJobs'


class App extends Component{
    //tạo 1 state lưu trữ giá trị ban đầu của kết quả hiển thị của component ContentColor
   
    render() {
        return(
            <div className="container-fluid">
               <Header/>
               <h1 className="text-center m-4">Quản lý công việc</h1>
               <div className="container">
                   <div className="row">
                        <MoreJobs/>
                        <TableJobs/>
                   </div>
                   
               </div>
            </div>
        );
    } 
}


export default App;