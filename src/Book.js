import React, { Component } from 'react';
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  static propTypes = {
    book: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}
          ></div>
          <BookShelfChanger book={this.props.book} />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors[0]}</div>
      </div>
    );
  }
}

export default Book