import React, { Component } from 'react'

class MoreJobs extends Component{
    //tạo 1 state lưu trữ giá trị ban đầu của kết quả hiển thị của component ContentColor
   
    render() {
        return(
           <div className="col-4 border p-0">
            <div className="alert alert-warning d-flex justify-content-between align-items-center">
                <p className="m-0">Thêm công việc</p>
                <i className="far fa-times-circle" />
            </div>
            <form className="p-4">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên:</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Trạng thái:</label>
                    <select className="form-control ">
                    <option>Kích hoạt</option>
                    <option>Chưa kích hoạt</option>
                    </select>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-warning mr-1"><i className="fas fa-plus" /> Lưu lại</button>
                    <button type="submit" className="btn btn-danger ml-1"><i className="fas fa-times" /> Hủy bỏ</button>
                </div>
            </form>
      </div>
        );
    } 
}


export default MoreJobs;