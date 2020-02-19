import React from "react";
import "./App.css";
import Movies from "./Movies";

const moviesData = [
  {
    hasOscars: false,
    title: "The Shawshank Redemption",
    year: "1994",
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: "9.3",
    id: 0
  },
  {
    hasOscars: true,
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: "9.2",
    id: 1
  },
  {
    hasOscars: true,
    title: "The Godfather: Part II",
    year: "1974",
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: "9.0",
    id: 2
  },
  {
    hasOscars: true,
    title: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: "9.0",
    id: 3
  },
  {
    hasOscars: false,
    title: "12 Angry Men",
    year: "1957",
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    rate: "8.9",
    id: 4
  }
];

class App extends React.Component {
  state = {
    movies: moviesData,
    title: "",
    director: "",
    hasOscars: false,
    rate: ""
  };

  // handleTitleChange = event => {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   this.setState({
  //     title: event.target.value
  //   });
  // };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  addMovie = event => {
    event.preventDefault();
    // retrieve the info for the movie we want to add
    const newMovie = {
      title: this.state.title,
      director: this.state.director,
      rate: this.state.rate,
      hasOscars: this.state.hasOscars,
      id: this.state.movies.length
    };

    // add the movie
    // clear the inputs
    this.setState({
      movies: [newMovie, ...this.state.movies],
      title: "",
      director: "",
      rate: "",
      hasOscars: false
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <form onSubmit={this.addMovie}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="director">Director: </label>
          <input
            id="director"
            name="director"
            value={this.state.director}
            onChange={this.handleChange}
          />
          <label htmlFor="rate">Rating: </label>
          <input
            type="number"
            name="rate"
            id="rate"
            value={this.state.rate}
            onChange={this.handleChange}
          />
          <label htmlFor="hasOscars">Has Oscars?</label>
          <input
            type="checkbox"
            name="hasOscars"
            id="hasOscars"
            checked={this.state.hasOscars}
            onChange={this.handleCheckboxChange}
          />
          <button>Click me!</button>
        </form>
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
