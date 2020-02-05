import React from 'react'
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import Page404 from './components/Page404'

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
    BooksAPI.update(book, newShelf);
    let isBookOnShelf = false;
    const updatedBooks = this.state.books.map(oldBook => {
      if (oldBook.id === book.id) {
        isBookOnShelf = true;
        return { ...oldBook, shelf: newShelf };
      }
      return oldBook;
    });
    if (!isBookOnShelf) {
      updatedBooks.push({...book, shelf: newShelf});
    }
    this.setState({ books: updatedBooks });
  };
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={({ history }) =>
              <SearchPage booksOnShelf=
                {this.state.books} handleShelfChange={this.handleShelfChange}
              />}
          />
          <Route
            exact
            path="/"
            render={() =>
              <HomePage books=
                {this.state.books} handleShelfChange={this.handleShelfChange} />
            }
          />
          <Route render={() => <Page404 />} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp
