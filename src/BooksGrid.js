import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };
  handleShelfChange = (book, newShelf) => {
    console.log("handleShelfChange", book, newShelf);
    this.props.handleShelfChange(book, newShelf);
  };
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.id}>
              <Book book={book} handleShelfChange={this.handleShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BooksGrid