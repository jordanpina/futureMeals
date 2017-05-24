import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Signup extends Component {

  render() {
    return (
      <div>
        <h1>Signup Page</h1>
        <form onSubmit={this.props.handleSignUpSubmit}>
          <input placeholder="Create Username" type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
          <input placeholder="Create Password" type="password" name="password" value={this.props.password} onChange={this.props.handleChange} />
          <Link to="/profile" onClick={this.props.handleSignUpSubmit}>Signup</Link>
        </form>
      </div>
    )
  }
}

module.exports = Signup;
