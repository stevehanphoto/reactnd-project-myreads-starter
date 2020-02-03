import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookCover extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
    };
    getBookCover = () => {
        if (typeof (this.props.book.imageLinks) === 'undefined') {
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
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` 
                    }}
                >
                </div>
            )
        }
    };
    render() {
        return (
            <div>
                {this.getBookCover()}
            </div>
        )
    }
}

export default BookCover
