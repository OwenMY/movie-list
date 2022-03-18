import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';

var MovieList = (props) => {
  console.log(props)
  if (props.input.state.movieView === 'all') {
    return (
      <div className="movie-list">
      {props.input.state.movieStorage.map((movie, key) => (
      <MovieListEntries movie={movie} app={props.input}  index={key}/>
      ))};
    </div>
    )
  }

  if (props.input.state.movieView === 'toWatch') {
    let toWatchMovies = [];
    for (let movie of props.input.state.movieStorage) {
      if (!movie.watched) {
        toWatchMovies.push(movie);
      }
    }

    return (
      <div className="movie-list">
      {toWatchMovies.map((movie) => (
      <MovieListEntries movie={movie} app={props.input}/>
      ))};
    </div>
    )
  }

  if (props.input.state.movieView === 'watch') {
    let watchedMovies = [];
    for (let movie of props.input.state.movieStorage) {
      if (movie.watched) {
        watchedMovies.push(movie);
      }
    }

    return (
      <div className="movie-list">
      {watchedMovies.map((movie) => (
      <MovieListEntries movie={movie} app={props.input}/>
      ))};
    </div>
    )
  }

  if (props.input.state.movieView === 'search') {
    var foundMovies = [];

    for (let movie of props.input.state.movieStorage) {
      if (movie.title.startsWith(props.input.state.searchQuery)) {
        foundMovies.push(movie);
      }
    }

    if (foundMovies.length === 0) {
      foundMovies = [{title: `movie "${props.input.state.searchQuery}" not found`}]
      return (
        <div className="movie-list">
        {foundMovies.map((movie) => (
        <MovieListEntries movie={movie} app={props.input} />
        ))}
      </div>
      )
    }

    return (
      <div className="movie-list">
      {foundMovies.map((movie) => (
      <MovieListEntries movie={movie} app={props.input}/>
      ))}
    </div>
    )
  }
};

// var MovieList = ({movieList, movieView, searchQuery, mainProps}) => {
//   if (movieView === 'all') {
//     return (
//       <div className="movie-list">
//       {movieList.map((movi) => (
//       <MovieListEntries movi={movi} moviList={movieList} mainProps={mainProps}/>
//       ))};
//     </div>
//     )
//   }

//   if (movieView === 'toWatch') {
//     let toWatchMovies = [];
//     for (let movie of movieList) {
//       if (!movie.watched) {
//         toWatchMovies.push(movie);
//       }
//     }

//     return (
//       <div className="movie-list">
//       {toWatchMovies.map((movi) => (
//       <MovieListEntries movi={movi} moviList={movieList} mainProps={mainProps}/>
//       ))};
//     </div>
//     )
//   }

//   if (movieView === 'watch') {
//     let watchedMovies = [];
//     for (let movie of movieList) {
//       if (movie.watched) {
//         watchedMovies.push(movie);
//       }
//     }

//     return (
//       <div className="movie-list">
//       {watchedMovies.map((movi) => (
//       <MovieListEntries movi={movi} moviList={movieList} mainProps={mainProps} moviV={movieView}/>
//       ))};
//     </div>
//     )
//   }

//   if (movieView === 'search') {
//     var foundMovies = [];
//     for (let movie of movieList) {
//       if (movie.title.includes(searchQuery)) {
//         foundMovies.push(movie);
//       }
//     }

//     if (foundMovies.length === 0) {
//       foundMovies = [{title: `movie "${searchQuery}" not found`}]
//       return (
//         <div className="movie-list">
//         {foundMovies.map((movi) => (
//         <MovieListEntries movi={movi} moviList={movieList} mainProps={mainProps}/>
//         ))}
//       </div>
//       )
//     }

//     return (
//       <div className="movie-list">
//       {foundMovies.map((movi) => (
//       <MovieListEntries movi={movi} moviList={movieList} mainProps={mainProps}/>
//       ))}
//     </div>
//     )
//   }
// };

export default MovieList;