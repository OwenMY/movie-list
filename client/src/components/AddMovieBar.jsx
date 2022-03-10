import React from 'react';

const AddMovieBar = ({addMovie}) => {
  console.log(addMovie)
  return (
    <div>
      <input className="add-movie" placeholder="Add movie data here" type="text" />
      <button onClick={(e) => addMovie(e)} type="button" text="add-movie">Add</button>
    </div>
  );
};

export default AddMovieBar;