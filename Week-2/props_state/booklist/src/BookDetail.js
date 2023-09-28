import './BookDetail.css';


function BookDetail({index, title, author, year, deleteBook}) {
  const handleDelete = ()=>{
    console.log(index);
    deleteBook(index);
  }

  return (
    <div className="book-container"> 
        <h3 className="book-title">{title}</h3>
        <p className="book-author">Author: {author}</p>
        <p className="book-year">Year: {year}</p>
        <button onClick={handleDelete} ><span>&#9249;</span></button>
    </div>
  );
}

export default BookDetail;
