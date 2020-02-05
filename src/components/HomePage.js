import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import TitleHeader from './TitleHeader';
import BookShelf from './BookShelf'

const HomePage = (props) => {
    return (
        <div className="list-books">
            <TitleHeader />
            <div className="list-books-content">
                <div>
                    <BookShelf
                        shelf={"currentlyReading"}
                        books={props.books}
                        handleShelfChange=
                            {(book, newShelf) => props.handleShelfChange(book, newShelf)}
                    />
                    <BookShelf
                        shelf={"wantToRead"}
                        books={props.books}
                        handleShelfChange=
                            {(book, newShelf) => props.handleShelfChange(book, newShelf)}
                    />
                    <BookShelf
                        shelf={"read"}
                        books={props.books}
                        handleShelfChange=
                            {(book, newShelf) => props.handleShelfChange(book, newShelf)}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

HomePage.propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
};

export default HomePage
