import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BooksGrid from './BooksGrid'

const BookShelf = (props) => {
  const showingBooks = props.books.filter(book => book.shelf === props.shelf);
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{_.startCase(props.shelf)}</h2>
        <BooksGrid
          books={showingBooks}
          handleShelfChange={
            (book, newShelf) => props.handleShelfChange(book, newShelf) }
        />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookShelf;