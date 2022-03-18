import React from 'react';
import MovieList from './MovieList.jsx';

class MovieListEntries extends React.Component {
  constructor(props) {
    super(props)
    console.log(this)
    this.state = {
      watched: this.props.app.props.movies[this.props.app.props.movies[this.props.index]]
    }

    // if (this.props.watched === true) {
    //   this.state = {
    //     watched: true
    //   };
    // } else {
    //   this.state = {
    //     watched: false
    //   };
    // }

    // console.log(props)
    console.log(this.props)
    // this.state = {
    //   watched: false
    // };

    this.handleWatchToggle = this.handleWatchToggle.bind(this);
  }

  handleWatchToggle() {
    // console.log(this)
    let currentMovie = this.props.movie.title;
    let parentState = this.props.app.state.movieStorage;
    let parentProps = this.props.app.props.movies;

    for (var i = 0; i < parentState.length; i++) {
      if (parentState[i].title === currentMovie) {
        if (parentState[i].watched) {
          parentProps[i].watched = false;
          // this.props.app.setState({ movieStorage: parentProps})
            this.setState({watched: false});
           } else {
          parentProps[i].watched = true;
          // this.props.app.setState({ movieStorage: parentProps})
          this.setState({watched: true});
        }
      }
    }
  }

  //   this.setState(prevState => ({
  //     watched: !prevState.watched
  //   }));
  // }

  render() {
    // console.log(this.moviV)
    // if (this.moviV === 'watch' && this.props.movi.watched === true) {
    //   this.setState({watched: true});
    // }

    if (this.props.movie.title === 'No movies to show at this time' || this.props.movie.title.includes('not found')) {
      return (
        <div className="movie-entry">
         <span className="movie-title">{this.props.movie.title}</span>
        </div>
      )
    } else {
      return (
        <div className="movie-entry">
         <span className="movie-title">{this.props.movie.title}</span>
         <button className="watched" onClick={this.handleWatchToggle} type="button">{(this.state.watched || this.props.movie.watched) ? 'watched' : 'Not Watched Yet'}</button>
        </div>
      )
    };
  }
};

// class MovieListEntries extends React.Component {
//   constructor({movi, moviList, mainProps, moviV}) {
//     super(movi)

//     // if (this.props.watched === true) {
//     //   this.state = {
//     //     watched: true
//     //   };
//     // } else {
//     //   this.state = {
//     //     watched: false
//     //   };
//     // }

//     this.state = {
//       watched: false
//     };

//     this.handleWatchToggle = this.handleWatchToggle.bind(this, mainProps);
//   }

//   handleWatchToggle(mainProps) {
//     let currentMovie = this.props.movi.title;
//     for (var i = 0; i < mainProps.length; i++) {
//       if (mainProps[i].title === currentMovie) {
//         if (mainProps[i].watched) {
//           mainProps[i].watched = false;
//         } else {
//           mainProps[i].watched = true;
//         }
//       }
//     }

//     console.log(mainProps)

//     this.setState(prevState => ({
//       watched: !prevState.watched
//     }));
//   }

//   render() {
//     // console.log(this.moviV)
//     // if (this.moviV === 'watch' && this.props.movi.watched === true) {
//     //   this.setState({watched: true});
//     // }

//     if (this.props.movi.title === 'No movies to show at this time' || this.props.movi.title.includes('not found')) {
//       return (
//         <div className="movie-entry">
//          <span className="movie-title">{this.props.movi.title}</span>
//         </div>
//       )
//     } else {
//       return (
//         <div className="movie-entry">
//          <span className="movie-title">{this.props.movi.title}</span>
//          <button className="watched" onClick={this.handleWatchToggle} type="button">{(this.state.watched) ? 'watched' : 'Not Watched Yet'}</button>
//         </div>
//       )
//     };
//   }
// };


export default MovieListEntries;