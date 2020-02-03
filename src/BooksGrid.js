import React from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

const BooksGrid = (props) => {
  function handleShelfChange(book, newShelf) {
    props.handleShelfChange(book, newShelf);
  };
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <Book book={book} handleShelfChange={handleShelfChange} />
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