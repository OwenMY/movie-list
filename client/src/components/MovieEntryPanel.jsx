import react from 'react';


const MovieEntryPanel = function({movie, handleWatchToggle, handleTitleClick}) {
  if (movie.watched === false) {
    return (
      <div>
        <ul className='movie-info'>
          <li>{`Release Date: ${movie.year}`}</li>
          <li>{`IMDM Rating: ${movie.imdbRating}`}</li>
          <button onClick={(e) => handleWatchToggle(e)} >{'Not Watched'}</button>
        </ul>
        <img className="movie-image"src={movie.image} alt={movie.title}></img>
      </div>
    )
  } else {
    return (
    <div>
    <ul className='movie-info'>
      <li>{`Release Date: ${movie.year}`}</li>
      <li>{`IMDM Rating: ${movie.imdbRating}`}</li>
      <button className="watch-button" onClick={(e) => handleWatchToggle(e)} >{'Watched'}</button>
    </ul>
    <img className="movie-image" src={movie.image} alt={movie.title}></img>
  </div>
    )
  }
};

export default MovieEntryPanel;