import React from 'react'
import { Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  handleShelfChange = (book, newShelf) => {
    console.log("handleShelfChange", book, newShelf);
    BooksAPI.update(book, newShelf);
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  };
  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => <SearchPage />} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf
                    shelf={"currentlyReading"}
                    books={this.state.books}
                    handleShelfChange={this.handleShelfChange}
                  />
                  <BookShelf
                    shelf={"wantToRead"}
                    books={this.state.books}
                    handleShelfChange={this.handleShelfChange}
                  />
                  <BookShelf
                    shelf={"read"}
                    books={this.state.books}
                    handleShelfChange={this.handleShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp
