import React, { Component } from 'react';
import PropTypes from "prop-types";
import BookCover from "./BookCover";
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
  styleBookCover = () => {
    return typeof(this.props.book.imageLinks) === 'undefined' ?
      { width: 128, height: 193, backgroundColor: 'lightgray' } :
      { width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }
/*    return url
      ? { width: 128, height: 193, backgroundImage: `url(${url})` }
      : { width: 128, height: 193, backgroundColor: 'gray' };*/
  };
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <BookCover book={book}/>
          {/*<div
            className="book-cover"
            style={this.styleBookCover()}
            /*style={this.styleBookCover}
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          ></div>*/}
          <BookShelfChanger book={book} onShelfChange={this.handleShelfChange} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book