import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        <li><Link to="/"> Login </Link></li>
        <li><Link to="/signup"> Sign up </Link></li>
        <li><Link to="/profile"> Profile </Link></li>
        <li><Link to="/rescipedisplay"> Recipes </Link></li>
      </ul>
    // <div>
    //   <Link to="/"> Login </Link>
    //   <Link to="/signup"> Sign up </Link>
    //   <Link to="/profile"> Profile </Link>
    //   <Link to="/rescipedisplay"> Recipes </Link>
    // </div>
    )
  }
}

module.exports = Login;
