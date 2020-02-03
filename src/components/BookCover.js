import React from 'react';
import PropTypes from 'prop-types';

const BookCover = (props) => {
    if (typeof (props.book.imageLinks) === 'undefined') {
        return (
            <div
                className="book-cover"
                style={{
                    width: 128, height: 193, backgroundColor: 'lightgrey',
                    textAlign: 'center', fontSize: '1.4rem', color: 'grey',
                    verticalAlign: 'middle', lineHeight: '193px'
                }}
            >
                No Cover
            </div>
        )
    }
    else {
        return (
            <div
                className="book-cover"
                style={{
                    width: 128, height: 193,
                    backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                }}
            >
            </div>
        )
    }
};

BookCover.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookCover;
