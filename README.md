# MyReads Project

This project was built for the Udacity React Nanodegree's React Fundamentals section of the course.  The purpose of the project is to demonstrate understanding of the basic structure and operation of a React-based app.

## Instructions to run:

The project uses Node.js and the Create-React-App starter.  Once Node is installed you can install the app locally by running:
```
git clone https://github.com/stevehanphoto/reactnd-project-myreads-starter.git
```

cd in to reactnd-project-myreads-starter project folder

run the commands:

```
npm install

npm start
```
Go to http://localhost:3000 on your browser

## Project Folder Structure
```
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Not modified.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Used currently used.
    ├── BooksAPI.js # A JavaScript API to communicate with Udacity backend.
    ├── components
    │   ├── HomePage.js # Home page of the app.
    │   ├── SearchPage.js # Shows books based on user's search query input.
    │   ├── TitleHeader.js # Shows title header and link back to homepage.
    │   ├── Page404.js # Shows 404 message.
    │   ├── BookShelf.js # Shows books on a given shelf with shelf name as title.
    │   ├── BooksGrid.js # Shows all books given a array of books.
    │   ├── Book.js # Shows a given book with book title and author(s).
    │   ├── BookCover.js # Shows a given book cover and a generic grey cover if none exist.
    │   └── BookShelfChanger.js # Shows which shelf a given book is on and provides option to change shelf.
    
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Resources

- [Project Starter Template](https://github.com/udacity/reactnd-project-myreads-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
  

### Search Terms
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Contributing

This repository is a fork of the starter code for _all_ Udacity students.

