import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import Profile from './profile.js';


class RecipeDisplay extends Component {
  constructor(props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleRecipeChange = this.handleRecipeChange.bind(this);
    this.state = {
      query: "",
      healthlabel: "",
      recipes: [],
    }
  }


  handleRecipeChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }


  handleSearchSubmit(e) {
    e.preventDefault();
    let base = 'https://api.edamam.com/search?';
    let query = `q=${this.state.query}`;
    let idAndKey = `&app_id=9c91d5f4&app_key=6f47ee6858565edebe96788f8743461a`;
    let range = `&from=0&to=100`;
    //let health = `&health=`;
    let url = base + query + idAndKey + range;
    axios.get(url)
      .then((response) => {
        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }
        response.data.hits=shuffle(response.data.hits);
        //response.data.hits is an array of first 100 recipe objects (or however many exist).
        this.setState({ recipes: response.data.hits.slice(0,10) });
      })
  }

  render() {
    let recipes = this.state.recipes.map((curr, i) => {
      return <Recipe recipedata={curr} username={this.props.username} key={i} />
    })

    // const ingredients = this.props.recipeData.ingredientLines[0].split(/,|;/g).map((ingredient, index) => {
    //   console.log(ingredient)
    //   return <li>{ingredient}</li>
    // })

    return (
      <div>
        <h1>Search for a Recipe</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input placeholder="Search" type="text" name="query" value={this.state.query} onChange={this.handleRecipeChange} />
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.props.handleProfileClick}>Profile</button>
        {recipes}
      </div>
    )
  }
}

module.exports = RecipeDisplay;