import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };
  handleShelfChange = (book, newShelf) => {
    console.log("handleShelfChange", book, newShelf);
    this.props.handleShelfChange(book, newShelf);
  };
  render() {
    const { books, shelf } = this.props;
    const showingBooks = books.filter(book => book.shelf === shelf);

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{_.startCase(shelf)}</h2>
          <BooksGrid
            books={showingBooks}
            handleShelfChange={this.handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;