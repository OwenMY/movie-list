import React from 'react';
import MovieList from './MovieList.jsx';

var MovieListEntries = ({movi}) => {
  console.log(movi);
  return (
    <div className="movie-entry">
      <span className="movie-title">{movi.title}</span>
    </div>
  )
};



export default MovieListEntries;