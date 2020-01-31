import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class BooksGrid extends Component {
    render() {
        //const { books } = this.props

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                                    </div>
                                    <BookShelfChanger book={book}/>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors[0]}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default BooksGrid