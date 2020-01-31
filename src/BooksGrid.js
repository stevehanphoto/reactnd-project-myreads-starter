import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BooksGrid