import React from 'react';

class AddMovieBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.app.handleAddMovie(this.state.value)
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input className="add-movie" value={this.state.value} onChange={this.handleChange} placeholder="Add movie data here" type="text" />
      <input type="submit" value="Add"/>
    </form>
    );
  }
};

export default AddMovieBar;