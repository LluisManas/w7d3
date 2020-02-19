import React from "react";

const Movie = props => {
  const { title, director, rate, hasOscars } = props.data;

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <p>{director}</p>
      {rate > 9.1 && <p>{rate}</p>}
      {hasOscars ? (
        <p>
          This movie has been awarded an Oscar
          <span role="img" aria-label="star emoji">
            ⭐️
          </span>
        </p>
      ) : (
        <p>No Oscar here...</p>
      )}
    </React.Fragment>
  );
};

const Movies = props => {
  return (
    <>
      {props.movies.map(movie => {
        return <Movie key={movie.id} data={movie} />;
      })}
    </>
  );
};

export default Movies;
