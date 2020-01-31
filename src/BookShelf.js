import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    render() {
        const { books, shelf } = this.props
        const showingBooks = books.filter(function(book) {
            return book.shelf === shelf;
        })

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{_.startCase(shelf)}</h2>
                    <BooksGrid books={showingBooks} />
                </div>
            </div>
        )
    }
}

export default BookShelf;