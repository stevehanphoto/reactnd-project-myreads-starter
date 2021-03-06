# MyReads Project

This project was built for the Udacity React Nanodegree's React Fundamentals section of the course.  This is a bookshelf web app that lets you to organize books that you have read.  The project uses React Router for routing and PropTypes for typechecking in child components.

## Instructions to run:

This project is deployed for you try out at [https://udacity-myreads-stevehan.netlify.app/](https://udacity-myreads-stevehan.netlify.app/)

If you like to run the app locally first install [Node.js](https://nodejs.org/en/) if you don't already have it installed.  Once Node is installed you can install the app by running:
```
git clone https://github.com/stevehanphoto/reactnd-project-myreads.git
```

cd in to the **reactnd-project-myreads** project folder and run the commands:

```
npm install

npm start
```
Go to http://localhost:3000 on your browser

## Project Folder Structure
```
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
  
## Search Terms
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
