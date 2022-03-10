import React from 'react';
import movies from '/client/src/data/movies';
import MovieList from './MovieList.jsx'

// const App = (props) => (
//   <div>Movie List</div>
// );

console.log(movies)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieStorage: this.props.props
    };
    console.log(this.state)
    console.log(this.state.movieStorage)
  };

  render() {
    return (
    <div>
     <h1 className="main-title">Movie List</h1>
        <MovieList movieList={this.state.movieStorage}/>
     </div>
    )
  }
};


export default App;