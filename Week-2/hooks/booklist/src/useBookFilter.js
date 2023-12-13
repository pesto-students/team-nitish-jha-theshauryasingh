import {useMemo} from  'react';

// books state as input and returns a filtered book list based on a given search term.
// book filtering logic within the custom hook using the useMemo hook to memoize the filtered list and optimize performance. 

function useBookFilter (books, search) {
    const filteredBooks = useMemo(()=>{
        books.filter((book)=>{
            return book.title.includes(search)
        })}, [books, search])
    return filteredBooks;
}

export default useBookFilter;
