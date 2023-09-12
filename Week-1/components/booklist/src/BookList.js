import React, { Component } from 'react';
import './BookList.css';
import Book from './Book';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {title: "Book 1", author: "Author 1", year: 2020},
        {title: "Book 2", author: "Author 2", year: 2018},
        {title: "Book 3", author: "Author 3", year: 2022},
    ],
    };
  }

  render() {
    return (
      <div className="book-list-container">
        <header className="app-header">
          <h2>
            Book Library 2
          </h2>
          <h3>
              List of books
          </h3>
          <div className="book-list">
            { this.state.books.map((book, index)=>(
              <Book title={book.title} author={book.author} year={book.year}/>
            )) }
          </div>
          {/* ul li logic*/}
        </header>
      </div>
    );    
  }
}

// function BookList() {
//   return (
//     <div className="book-list-container">
//       <header className="app-header">
//         <h2>
//           Book Library 2
//         </h2>
//         <h3>
//             List of books
//         </h3>
//         <div className="book-list">
//           { books.map((book, index)=>(
//             <Book title={book.title} author={book.author} year={book.year}/>
//           )) }
//         </div>
//         {/* ul li logic*/}
//       </header>
//     </div>
//   );
// }

export default BookList;