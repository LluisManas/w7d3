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
    movies: moviesData
  };

  render() {
    return (
      <div className="App">
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
