import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class SearchPage extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };
  state = {
    books: [],
    query: ""
  };
  /*
  componentDidMount() {
    console.log("componentDidMount()");
    BooksAPI.search(this.state.query).then(books => {
      this.setState(() => ({
        books
      }));
    });
  }*/
  /*
  isOnShelf = (book) => {
    this.props.booksOnShelf(bookOnShelf => {
      if (bookOnShelf.id === book.id) {
        book.shelf = bookOnShelf.shelf;
        return book;
      };
      book.shelf = 'none'
      return book;
    });
  }*/

  updateQuery = query => {
    this.setState({ query: query });
    this.searchBook(query);
  }
  getShelf = id => {
    const book = this.props.booksOnShelf.filter((book) => book.id === id);
    //console.log(id, book)
    return book.length ? book[0].shelf : null;
//    return book.length ? book[0].shelf : 'none';
  };
  searchBook(query) {
    if (query && query.length > 0) {
      BooksAPI.search(query)
        .then(books => {
          const booksWithShelfInfo = books.map(book => {
            book.shelf = this.getShelf(book.id);
            return book
          });
          this.setState({ books: booksWithShelfInfo });
        })
        .catch((err) => {
          console.log(err);
          this.resetSearch();
        });
    }
  };
  resetSearch() {
    this.setState({ books: [] });
  }

/*  handleShelfChange = (book, newShelf) => {
    //console.log("handleShelfChange", book, newShelf);
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState(currentState => ({
        books: currentState.books.filter(currentBook => currentBook.id !== book.id).concat([book])
      }));
    });
  };*/
  /*
  handleShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    const updatedBooks = this.state.books.map(oldBook => {
      if (oldBook.id === book.id) {
        return { ...oldBook, shelf: newShelf};
      }
      return oldBook;
    });
    this.setState({ books: updatedBooks});
  };*/
  handleShelfChange = (book, newShelf) => {
    console.log("handleShelfChange", book, newShelf);
    const updatedBooks = this.state.books.map(oldBook => {
      if (oldBook.id === book.id) {
        oldBook.shelf = newShelf;
      }
      return oldBook
    });
    this.setState({ books: updatedBooks });

    this.props.handleShelfChange(book, newShelf);
  };
  render() {
    //const booksToShow = this.state.books ? this.state.books.filter(book =>
    //  book.imageLinks.thumbnail !== undefined
    //) : [];
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {this.state.books && 
          <BooksGrid 
            books={this.state.books} 
            handleShelfChange={this.handleShelfChange}             
          />}
        </div>
      </div>
    );
  }
}

export default SearchPage