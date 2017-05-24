import React, { Component } from 'react';
import axios from 'axios';
import Login from './login.js';
import Signup from './signup.js';
import Profile from './profile.js';
import RecipeDisplay from './recipeDisplay.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isAuthenticated: false,
    }
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSignUpSubmit() {
    axios.post('/signup', { username: this.state.username, password: this.state.password })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false });
        }
      });

  }

  handleLoginSubmit() {
    axios.post('/login', { username: this.state.username, password: this.state.password })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ isAuthenticated: true });
          // <Redirect to={{
          //   pathname: '/',
          // }}/>
        } else {
          this.setState({ isAuthenticated: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=> (
            <div>
              <Login
                handleSignUpClick={this.handleSignUpClick}
                handleChange={this.handleChange}
                handleLoginSubmit={this.handleLoginSubmit}
              />
            </div>
          )}/>
          <Route exact path="/signup" render={()=> (
            <div>
              <Signup
                handleChange={this.handleChange}
                handleSignUpSubmit={this.handleSignUpSubmit}
                isAuthenticated={this.state.isAuthenticated}
              />
            </div>
          )}/>
          <Route exact path="/profile" render={()=>(
            this.state.isAuthenticated ?
            (<div>
              <Profile
                username={this.state.username}
                isAuthenticated={this.state.isAuthenticated}
              />
            </div> ): (
                <Redirect to={{
                  pathname: '/',
                }}/>
              )
            )}/>

          <Route exact path="/recipedisplay" render={()=>(
          this.state.isAuthenticated ?
          (<div>
            <RecipeDisplay
              handleChange={this.handleChange}
              handleSignUpClick={this.handleSignUpClick}
              handleLoginSubmit={this.handleLoginSubmit}
            />
          </div> ): (
              <Redirect to={{
                pathname: '/',
              }}/>
            )
          )}/>
        </div>
      </Router>

    )
  }
}


module.exports = App;
