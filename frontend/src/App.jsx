import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/createBook";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:4000/api/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (newBook) => {
    await axios.post("http://localhost:4000/api/books", newBook);
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:4000/api/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Book Manager
        </h1>
        <CreateBook addBook={addBook} />
        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}
