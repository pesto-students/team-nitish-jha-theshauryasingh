import './Book.css';

const books = [
    {title: "Book 1", author: "Author 1", year: 2020},
    {title: "Book 2", author: "Author 2", year: 2018},
    {title: "Book 3", author: "Author 3", year: 2022},

];

function Book({title, author, year}) {
  return (
    <div className="book-container">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">Author: {author}</p>
        <p className="book-year">Year: {year}</p>
    </div>
  );
}

export default Book;
