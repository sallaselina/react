import "./style.css";

export const book = {
  title: "",
  author: "",
  genre: "",
  isRead: true,
};

console.log(book);

// Please note: The Add book does not actually work!
// This exercise is just about practicing event handling
// Ignore the inputs; you'll learn to handle user input later.

function App() {
  /* Implement an event handler function, handleClick, 
    that is triggered when the "Add book" button is clicked. */
  function handleClick() {
    book.title = "title";
    book.author = "author";
    book.genre = "genre";
    book.isRead = true;
  }

  return (
    <div id="app">
      <h1>Add book</h1>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>

      <div>
        <label>Author</label>
        <input type="text" />
      </div>

      <div>
        <label>Genre</label>
        <select name="genre">
          <option value="mystery">Mystery</option>
          <option value="science_fiction">Science Fiction</option>
          <option value="history_fiction">Historical Fiction</option>
        </select>
      </div>

      <button onClick={handleClick}>Add book</button>
    </div>
  );
}

console.log(book);

export default App;
