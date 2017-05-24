import React, { Component } from 'react';
import axios from 'axios';


class Recipe extends Component {
  constructor(props) {
    super(props)
    this.saveToDay = this.saveToDay.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.state = {
      day: "",
    }
  }

  handleDropDownChange(e) {
    this.setState({day: e.target.value})
  }


  saveToDay(e) {
    e.preventDefault();
    axios.post('/recipeDisplay', { day: this.state.day, //TEST THIS!!!
                                   username: this.props.username, //USERNAME MUST BE PASSED DOWN FROM PARENT
                                   recipe: this.props.recipedata
                                  })
      .then(response => {
        console.log(response.data);
      });

  }

  render() {
    let ingredients = this.props.recipedata.recipe.ingredientLines.map((curr, index) => {
      return <li>{curr}</li>
    })
    //ingredientLines is an array so wont display properly
    return (
      <div className="recipePreview">
        <a href={this.props.recipedata.recipe.url}><img src={this.props.recipedata.recipe.image}/></a>
        <form onSubmit={this.saveToDay}>
          <input type="date" name="date" onChange={this.handleDropDownChange}/>
          <input type="submit" value="Save" />
        </form>
        <h3>{this.props.recipedata.recipe.label}</h3>
        <ul>{ingredients}</ul>
        <p>Servings: {this.props.recipedata.recipe.yield}</p>
        <p>Calories Per Serving: {Math.floor(this.props.recipedata.recipe.calories/this.props.recipedata.recipe.yield)} cal</p>
      </div>
    )
  }
}

module.exports = Recipe;