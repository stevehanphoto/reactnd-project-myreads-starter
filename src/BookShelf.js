import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

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
                    <h2 className="bookshelf-title">{title}</h2>
                    <BooksGrid books={showingBooks} />
                </div>
            </div>
        )
    }
}

export default BookShelf;