import BookList from './BookList';
import WithLogging from './WithLogging' ;

const BookListWithLogging = WithLogging(BookList);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookListWithLogging/>
      </header>
    </div>
  );
}

export default App;
