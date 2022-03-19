import React from 'react';
import MovieList from './MovieList.jsx';
import MovieEntryPanel from './MovieEntryPanel.jsx';

const MovieListEntries = function({movie, handleWatchToggle, handleTitleClick}) {
  if (movie.title.includes('not found')) {
    return (
      <div className="movie-entry">
        <h3 className="movie-title">{movie.title}</h3>
      </div>
    )
  } else {
    return (
      <div className="movie-entry">
        <h3 className="movie-title" onClick={handleTitleClick}>{movie.title}</h3>{
          movie.display ? <MovieEntryPanel movie={movie} handleWatchToggle={handleWatchToggle} /> : null
      }</div>
    )
  }
};

export default MovieListEntries;