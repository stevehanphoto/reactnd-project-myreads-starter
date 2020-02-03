import React from 'react'
import PropTypes from 'prop-types'

const BookShelfChanger = (props) => {
  return (
    <div className="book-shelf-changer">
      <select value={
          props.book.shelf ? props.book.shelf : 'none'} 
          onChange={(e) => props.onShelfChange(e.target.value)}
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string,
  onShelfChange: PropTypes.func.isRequired
};

export default BookShelfChanger
