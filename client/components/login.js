import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>
      <div className="jumbotron">
        <h1>Recipe Generator</h1>
      </div>
      
      <form onSubmit={this.props.handleLoginSubmit}>
        <input placeholder="Username" type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
        <input placeholder="Password" type="password" name="password" value={this.props.password} onChange={this.props.handleChange} />
        <Link to="/profile" onClick={this.props.handleLoginSubmit}><button>Login</button></Link>
      </form>
      <p>Don't have an account?</p>
      <Link to="/signup"><button>Signup</button></Link>
    </div>
    )
  }
}

module.exports = Login;
