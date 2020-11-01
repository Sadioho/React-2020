import React, { Component } from 'react';


class Header extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="# " className="navbar-brand">ReactJS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a href="# " className="nav-link">Home
                  <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a href="# " className="nav-link">Product</a>
                </li>
                <li className="nav-item">
                  <a href="# " className="nav-link">About Us</a>
                </li>
              </ul>
            </div>
          </nav>


        );
    }
}


export default Header;