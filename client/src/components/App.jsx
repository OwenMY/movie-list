import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import React from 'react';
import movies from '/client/src/data/movies';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieStorage: this.props.movies,
      movieView: 'all',
      searchQuery: null
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToWatchClick = this.handleToWatchClick.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
  };

  handleSearch(e) {
    let userInput = document.getElementsByClassName('search')[0].value;

    this.setState({
      movieStorage: this.props.movies,
      movieView: 'search',
      searchQuery: userInput
    });
  }

  handleAddMovie(movieName) {
    console.log(this.props)
    if (this.props.movies[0].title === 'No movies to show at this time') {
      this.props.movies.push({title: movieName, watched: false});
      this.props.movies.shift()
      this.setState( {movieStorage: this.props.movies, movieView: 'all'} );
    } else {
      let movieExists = false;
      for (let movie of this.props.movies) {
        (movie.title === movieName) ? movieExists = true : undefined
      }

      if (!movieExists) {
        this.props.movies.push({title: movieName, watched: false})
      }
      this.setState({ movieStorage: this.props.movies, movieView: 'all' })
    }
  }

  handleWatchedClick() {
    this.setState({ movieStorage: this.props.movies, movieView: 'watch'});
  }

  handleToWatchClick() {
    this.setState({ movieStorage: this.props.movies, movieView: 'toWatch'});
  }

  render() {
    return (
    <div>
     <h1 className="main-title">Movie List</h1>
       <div>
         <AddMovieBar app={this}/>
       </div>
       <div>
         <button onClick={this.handleWatchedClick} className="watched-list" type="button">Watched</button>
         <button onClick={this.handleToWatchClick} className="to-watch-list" type="button">To Watch</button>
         <SearchBar clickSearch={this}/>
       </div>
        <MovieList input={this}/>
     </div>
    )
  }

  //***save point***

  // render() {
  //   return (
  //   <div>
  //    <h1 className="main-title">Movie List</h1>
  //      <div>
  //        <AddMovieBar app={this}/>
  //      </div>
  //      <div>
  //        <button onClick={this.handleToWatchClick} className="watched-list" type="button">Watched</button>
  //        <button onClick={this.handleWatchedClick} className="to-watch-list" type="button">To Watch</button>
  //        <SearchBar clickSearch={this}/>
  //      </div>
  //       <MovieList movieList={this.state.movieStorage} movieView={this.state.movieView} searchQuery={this.state.searchQuery} mainProps={this.props.props}/>
  //    </div>
  //   )
  // }

  // render() {
  //   return (
  //   <div>
  //    <h1 className="main-title">Movie List</h1>
  //      <div>
  //        <AddMovieBar app={this}/>
  //      </div>
  //        <SearchBar clickSearch={this}/>
  //      <Tabs>
  //        <TabList>
  //           <Tab onClick={this.handleToWatchClick} className="watched-list" type="button">Watched</Tab>
  //           <Tab onClick={this.handleWatchedClick} className="to-watch-list" type="button">To Watch</Tab>
  //        </TabList>
  //        <TabPanel>
  //          <div>
  //          <MovieList movieList={this.state.movieStorage} movieView={this.state.movieView} searchQuery={this.state.searchQuery} mainProps={this.props.props}/>
  //          </div>
  //        </TabPanel>
  //        <TabPanel>
  //           <MovieList movieList={this.state.movieStorage} movieView={this.state.movieView} searchQuery={this.state.searchQuery} mainProps={this.props.props}/>
  //        </TabPanel>
  //     </Tabs>

  //     </div>
  //   )
  // }
};


export default App;