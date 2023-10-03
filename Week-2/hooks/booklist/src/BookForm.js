import {useState} from 'react';

function BookForm(props){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const submitHandler = (e) => {
        e.preventDefault()
        const newBook = {
            title: title,
            author: author,
            year:year
        };
        props.addBook(newBook);

    };
    // const titleValue = (data) => {setTitle(data.target.value)}
    // const authorValue = (data) => {setAuthor(data.target.value)}
    // const yearValue = (data) => {setYear(data.target.value)}

    return (
        <div >
            <h1>Add Book by writing details below: </h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="write title" value={title}  onChange={(e) => {setTitle(e.target.value)}} />
                <input type="text" placeholder="write author" value={author} onChange={(e) => {setAuthor(e.target.value)}}/>
                <input type="text" placeholder="write year" value={year}   onChange={(e) => {setYear(e.target.value)}}/>
                <button type="submit">Add Book</button>
            </form>
        </div>
      );

}

export default BookForm;