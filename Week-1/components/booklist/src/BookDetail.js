import './Book.css';


function BookDetail({index, title, author, year}) {
  return (
    <div className="book-container"> 
        <h3 className="book-title">{title}</h3>
        <p className="book-author">Author: {author}</p>
        <p className="book-year">Year: {year}</p>
    </div>
  );
}

export default BookDetail;
