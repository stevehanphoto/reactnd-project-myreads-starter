import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        shelfType: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    render() {
        const { title, books, shelfType } = this.props
        const showingBooks = books.filter(function(book) {
            console.log('this.props.shelfType', shelfType)
            return book.shelf === shelfType;
        })

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {showingBooks.map(book => (
                                <li>
                                    <div key={this.props.books.shelf} className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                                            </div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors[0]}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf;