// import logo from './booklist.svg';
// import './BookList.css';

const books = [
    {title: "Book 1", author: "Author 1", year: 2020},
    {title: "Book 2", author: "Author 2", year: 2018},
    {title: "Book 3", author: "Author 3", year: 2022},

];

function BookList() {
  return (
    <div className="BookList">
      <header className="App-header">
        <h2>
          Book Library
        </h2>
        <h3>
            List of books
        </h3>
        <ul>
            { books.map((book, index)=>(
                <li key={index} className="Book">
                    <h3> {book.title} </h3> 
                    <p>Author: {book.author}</p> 
                    <p>Year: {book.year} </p> 
                </li>
            )) }
            {/* { books.map((book, index)=>{
                <li key={index}>
                    <strong>Title: </strong> {book.title}
                    <strong>Author: </strong> {book.author}
                    <strong>Year: </strong> {book.year}
                </li>
            }) } */}
        </ul>
      </header>
    </div>
  );
}

export default BookList;
