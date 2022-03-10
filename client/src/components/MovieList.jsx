import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';

var MovieList = ({movieList}) => (
    <div className="movie-list">
      {movieList.map((movi) => (
      <MovieListEntries movi={movi}/>
      ))};
    </div>
);

export default MovieList;