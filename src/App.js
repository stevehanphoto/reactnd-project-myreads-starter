import React from 'react'
import { Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log(books);
      })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => <SearchPage />} />
        <Route
          exact path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf
                    title={"Currently Reading"}
                    shelf={"currentlyReading"}
                    books={this.state.books}
                  />
                  <BookShelf
                    title={"Want to Read"}
                    shelf={"wantToRead"}
                    books={this.state.books}
                  />
                  <BookShelf
                    title={"Read"}
                    shelf={"read"}
                    books={this.state.books}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp
