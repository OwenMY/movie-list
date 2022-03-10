import React from 'react';
import movies from '/client/src/data/movies';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieStorage: this.props.props
    };
  };

  //create a search bar click event
  handleSearch(e) {
    let userInput = document.getElementsByClassName('search')[0].value;
    let wasFound = false;

    this.props.props.forEach((movie) => {
      let renderMovie = movie.title.toLowerCase()
      if (renderMovie.includes(userInput.toLowerCase())) {
        this.setState({
          movieStorage: [movie]
        })
        wasFound = true;
      }
    })

    if (!wasFound) {
      this.setState({
        movieStorage: [{title: `movie "${userInput}" not found`}]
      });
    }
  }

  handleAddMovie(e) {
    let userInput = document.getElementsByClassName('add-movie')[0].value;
    console.log(userInput)
    if (this.props.props[0].title === 'No movies to show at this time') {
      this.props.props.push({title: userInput});
      this.props.props.shift()
      this.setState(this.props.props);
    } else {
      this.props.props.push({title: userInput});
      this.setState(this.props.props);
    }
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleSearch();
    }

  }

  render() {
    return (
    <div>
     <h1 className="main-title">Movie List</h1>
       <div>
         <AddMovieBar addMovie={this.handleAddMovie.bind(this)}/>
       </div>
       <div>
         <SearchBar clickSearch={this.handleSearch.bind(this)} keyPress={this.handleKeyPress.bind(this)}/>
       </div>
        <MovieList movieList={this.state.movieStorage}/>
     </div>
    )
  }
};


export default App;