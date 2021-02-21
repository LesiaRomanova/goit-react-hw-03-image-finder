import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={text}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
