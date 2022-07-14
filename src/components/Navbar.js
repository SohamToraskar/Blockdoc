import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Student from './Student';
import Home from './App'
import Test from './Test'

class Navbar extends Component {

  render() {
    return (
      <nav class="navbar navbar-dark bg-dark text-monospace">
       
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={box} width="30" height="30" className="align-top" alt="" />
            BlockDoc
          </a>
        
          <li class="nav-item">
          <Link to="/">Issuer Dashboard</Link>
          </li>
          <li class="nav-item">
          <Link to="/Student">Students Corner</Link>
          </li>
        
        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </small>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;