import React from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

const BooksGrid = (props) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <Book book={book} handleShelfChange={
              (book, newShelf) => props.handleShelfChange(book, newShelf)} />
          </li>
        ))}
      </ol>
    </div>
  );
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BooksGrid