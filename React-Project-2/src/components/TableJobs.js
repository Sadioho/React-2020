import React, { Component } from 'react'

class TableJobs extends Component{
    //tạo 1 state lưu trữ giá trị ban đầu của kết quả hiển thị của component ContentColor
   
    render() {
        return(
         <div className="col-8 border p-2">
        <form className="form-group col-sm-12 col-lg-12 col-md-12 ">
          <button type="submit" className="btn btn-primary mb-3"><i className="fas fa-plus" /> Thêm công việc</button>
          <div className="input-group">
            <input type="text" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-primary mr-3" type="button"><i className="fas fa-search" /> Tìm</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sắp xếp
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="# ">A-&gt;Z</a>
                <a className="dropdown-item" href="# ">Z-&gt;A</a>
                <a className="dropdown-item" href="# ">Kích hoạt</a>
                <a className="dropdown-item" href="# ">Chưa kích hoạt</a>
              </div>
            </div>
          </div>
        </form>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th scope="col-1">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" />
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <select className="form-control">
                  <option>Tất cả</option>
                  <option>Chưa kích hoạt</option>
                  <option>Kích hoạt</option>
                </select>
              </td>
              <td />
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>
                <p>XUAN ANH </p>
              </td>
              <td className="text-center">
                <span className="badge badge-success ">Kích hoạt</span>
              </td>
              <td className="text-center">
                <button type="submit" className="btn btn-warning mr-2">
                  <span className="fas fa-pencil-alt mr-3" />Edit</button>
                <button type="submit" className="btn btn-danger ">
                  <span className="far fa-trash-alt mr-2" />Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

        );
    } 
}


export default TableJobs;