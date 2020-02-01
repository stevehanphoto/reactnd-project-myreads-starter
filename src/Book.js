import React, { Component } from 'react';
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };
  handleShelfChange = (newShelf) => {
    console.log("handleShelfChange", this.props.book, newShelf);
    this.props.handleShelfChange(this.props.book, newShelf);
  };
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          ></div>
          <BookShelfChanger book={book} onShelfChange={this.handleShelfChange} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    );
  }
}

export default Book