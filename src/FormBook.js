import React, { useState } from "react";
import Book from "./Book";

function FormBook() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  function fixTitle(event) {
    setTitle(event.nativeEvent.target.value);
  }
  function fixAuthor(event) {
    setAuthor(event.nativeEvent.target.value);
  }
  function fixYear(event) {
    setYear(event.nativeEvent.target.value);
  }

  function addBook(event) {
    event.preventDefault();
    const newBook = {
      id: books.length + 1,
      title,
      author,
      year,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setYear("");
  }

  return (
    <div className="formBook">
      <form id="book-form" autocomplete="off" onSubmit={addBook}>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            onChange={fixTitle}
            value={title}
          />
        </div>

        <div className="form-group">
          <label for="author">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            onChange={fixAuthor}
            value={author}
          />
        </div>

        <div className="form-group">
          <label for="year">Year</label>
          <input
            type="number"
            id="year"
            className="form-control"
            onChange={fixYear}
            value={year}
          />
        </div>
        <input
          type="submit"
          value="Add Book"
          className="btn btn-warning btn-block add-btn"
        />
      </form>
      <table class="table table-striped mt-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FormBook;
