import React from 'react';
import PropTypes from "prop-types";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <BookCover book={props.book}/>
        <BookShelfChanger 
          book={props.book} 
          onShelfChange={
            (newShelf) => props.handleShelfChange(props.book, newShelf)} 
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors && props.book.authors.join(', ')}</div>
    </div>
  );  
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default Book