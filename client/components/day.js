import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
//whatever child components we need

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      day: this.props.day,
      savedRecipes: []
      // label: '',
      // image: '',
      // url: '',
      // yield: 0,
      // healthLabels: [],
      // ingredientLines: []
    }
  }

  componentDidMount() {
    axios.get(`day/${this.state.day}/${this.state.username}`)
      .then((response) => {
        //console.log(response);
        this.setState({savedRecipes: response});
      });
  }

  render() {

    const recipes = this.state.savedRecipes.map((curr, index) => {
      return <SavedRecipe recipeData={curr} key={index} />
    });

    return (
      <div>
        <h4>{this.props.day}</h4>
        {recipes}
      </div>
    )
  }
}

module.exports = Day;