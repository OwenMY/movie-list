import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import { API_KEY, MOVIE_DB_KEY } from '../config/config.js';
import React from 'react';
import movies from '/client/src/data/movies';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

const formatData = function(data) {
  return data.results.map((movie) => {
    let theMovie = {
        title: movie.title,
        year: movie.release_date,
        imdbRating: movie.vote_average,
        watched: false,
        image: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
        display: false
      }
      return theMovie;
    }
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      movieView: 'all',
      searchQuery: null
    };
  }

  handleSearch(e) {
    let userInput = document.getElementsByClassName('search')[0].value;

    this.setState({
      movies: this.state.movies,
      movieView: 'search',
      searchQuery: userInput
    });
  }

  handleTitleClick(e) {
    e.persist()
    let movieTitle = e.target.innerText;
    let movieList = this.state.movies;

    for (let i = 0; i < movieList.length; i++) {
      movieList[i].title === movieTitle ? movieList[i].display = !movieList[i].display : undefined;
    }

    this.setState({movies: movieList});
  }

  handleAddMovie(movieName) {
    if (this.props.movies[0].title === 'No movies to show at this time') {
      this.props.movies.push({title: movieName, watched: false});
      this.props.movies.shift()
      this.setState( {movies: this.state.movies, movieView: 'all'} );
    } else {
      let movieExists = false;
      for (let movie of this.props.movies) {
        (movie.title === movieName) ? movieExists = true : undefined
      }

      if (!movieExists) {
        this.props.movies.push({title: movieName, watched: false})
      }
      this.setState({ movies: this.state.movies, movieView: 'all' })
    }
  }

  handleWatchToggle(e) {
    let movieEntry = e.nativeEvent.path[3].innerText;
    let slashIndex = movieEntry.indexOf(`\n`);
    let movieName = movieEntry.slice(0, slashIndex);
    let movieList = this.state.movies;

    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].title === movieName) {
        movieList[i].watched = !movieList[i].watched;
        break;
      }
    }

    this.setState({movies: movieList});
  }

  handleWatchedClick() {
    this.setState({ movieView: 'watch'});
  }

  handleToWatchClick() {
    this.setState({ movieView: 'toWatch'});
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIE_DB_KEY}`)
      .then((response) => response.json())
      .then((data) => formatData(data))
      .then((movies) => this.setState({movies: movies}))
  }

  render() {
    return (
    <div>
     <h1 className="main-title">Movie List</h1>
       <div>
         <AddMovieBar handleAddMovie={this.handleAddMovie.bind(this)}/>
       </div>
       <div>
         <button onClick={this.handleWatchedClick.bind(this)} className="watched-list" type="button">Watched</button>
         <button onClick={this.handleToWatchClick.bind(this)} className="to-watch-list" type="button">To Watch</button>
         <SearchBar handleSearch={this.handleSearch.bind(this)}/>
       </div>{
         (this.state.movies.length !== 0) ? <MovieList movies={this.state.movies} movieView={this.state.movieView} searchQuery={this.state.searchQuery} handleWatchToggle={this.handleWatchToggle.bind(this)} handleTitleClick={this.handleTitleClick.bind(this)}/> : null
       }</div>
    )
  }
};


export default App;