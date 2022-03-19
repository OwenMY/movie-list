import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';

var MovieList = ({movies, movieView, searchQuery, handleWatchToggle, handleTitleClick}) => {

  if (movieView === 'all') {
    return (
      <div className="movie-list">
      {movies.map((movie, key) => (
      <MovieListEntries movie={movie} key={key} handleWatchToggle={handleWatchToggle} handleTitleClick={handleTitleClick}/>
      ))};
    </div>
    )
  }

  if (movieView === 'toWatch') {
    let toWatchMovies = [];
    for (let movie of movies) {
      if (!movie.watched) {
        toWatchMovies.push(movie);
      }
    }

    return (
      <div className="movie-list">
      {toWatchMovies.map((movie, key) => (
      <MovieListEntries movie={movie} key={key} handleWatchToggle={handleWatchToggle} handleTitleClick={handleTitleClick}/>
      ))};
    </div>
    )
  }

  if (movieView === 'watch') {
    let watchedMovies = [];
    for (let movie of movies) {
      if (movie.watched) {
        watchedMovies.push(movie);
      }
    }

    return (
      <div className="movie-list">
      {watchedMovies.map((movie, key) => (
      <MovieListEntries movie={movie} key={key} handleWatchToggle={handleWatchToggle} handleTitleClick={handleTitleClick}/>
      ))};
    </div>
    )
  }

  if (movieView === 'search') {
    var foundMovies = [];

    for (let movie of movies) {
      if (movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())) {
        foundMovies.push(movie);
      }
    }

    if (foundMovies.length === 0) {
      foundMovies = [{title: `movie "${searchQuery}" not found`}]
      return (
        <div className="movie-list">
        {foundMovies.map((movie, key) => (
        <MovieListEntries movie={movie} key={key} handleWatchToggle={handleWatchToggle} handleTitleClick={handleTitleClick}/>
        ))}
      </div>
      )
    }

    return (
      <div className="movie-list">
      {foundMovies.map((movie, key) => (
      <MovieListEntries movie={movie} key={key} handleWatchToggle={handleWatchToggle} handleTitleClick={handleTitleClick}/>
      ))}
    </div>
    )
  }
};

export default MovieList;