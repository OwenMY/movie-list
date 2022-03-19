import React from 'react';

class AddMovieBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  };

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.handleAddMovie(this.state.value)
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit.bind(this)}>
      <input className="add-movie" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Add movie data here" type="text" />
      <input type="submit" value="Add"/>
    </form>
    );
  }
};

export default AddMovieBar;