import React, { Component } from 'react';
import './BookList.css';
import Book from './Book';
import BookDetail from './BookDetail';
import BookForm from './BookForm';


class BookList extends Component {
  constructor(props) { //constructor method and props is taken as input
    super(props);      // to use arguments to parent class i.e. Component, hence this isn't required -> 'this.props = props'
    this.state = {
      books: [
        {title: "Book 1", author: "Author 1", year: 2020},
        {title: "Book 2", author: "Author 2", year: 2018},
        {title: "Book 3", author: "Author 3", year: 2022},
      ],
    };
  }

  addBook = (newBook) => {
    const temp = this.state.books.push(newBook)
    this.setState({temp});
  };

  deleteBook = (index) => {
    const temp = this.state.books.splice(index,1);
    this.setState({temp});
  }

  render() {
    return (
      <div className="book-list-container">
        <header className="app-header">
          <h2>
            Book Library 2
          </h2>
        </header>
        <h3>
            List of books
        </h3>
        {this.state.books.length === 0 ? <div className="book-list">book list is currently empty</div> 
        : <div className="book-list">
          { this.state.books.map((book, index)=>(
            <BookDetail key={index} index={index} title={book.title} author={book.author} year={book.year} deleteBook={this.deleteBook}/>
            // <Book index={book.index} title={book.title} author={book.author} year={book.year}/>
          )) }
        </div>
        }
          {/* ul li logic*/}
        
        <BookForm addBook={this.addBook}/>
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