import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import Day from './day.js'; //whatever child components we need
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
    }
    // this.handleCalendarSelect = handleCalendarSelect.bind(this);
  }



  handleCalendarSelect(day) {
    day = day.toISOString().slice(0, 10);
    console.log(day, this.props.username);
    axios.get('/getRecipes', {
      params: { day: day, username: this.props.username }
    }).then((response) => {
      console.log("RESPONSE FROM /GETRECIPES", response)
    }).catch((err)=>{console.log(err)})
  }

  render() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const recipeComponents = [];
    recipeComponents.push(<Day username={this.state.username} day={'Monday'} />);
    return (
      <div>
        <div>
          <h1>Profile Page</h1>
        </div>
        <div>
          <div id="calendar">
            <InfiniteCalendar
              onSelect={this.handleCalendarSelect.bind(this)}
              rowHeight={50}
              width={400}
              height={400}
              selected={today}
              minDate={lastWeek}
            />
          </div>
          <div id="recipes">
            {recipeComponents}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Profile;
