import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string,
    onShelfChange: PropTypes.func.isRequired
  };
  handleChange = (e) => {
    console.log("handleChange", e.target.value);
    this.props.onShelfChange(e.target.value);
  }
  render() {
    return (
      <div className="book-shelf-changer">
        {/*        <select value={this.props.book.shelf} onChange={this.handleChange}>*/}
        <select value={this.props.book.shelf ? this.props.book.shelf : 'none'} onChange={this.handleChange}>
      {/*  <select defaultValue={this.props.book.shelf ? this.props.book.shelf : 'none'} value={this.props.book.shelf} onChange={this.handleChange}>*/}
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger
