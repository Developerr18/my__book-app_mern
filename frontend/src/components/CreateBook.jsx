import { useState } from "react";

export default function CreateBook({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ title, author, _id: Date.now() }); // Added _id for demo
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>
      <div className="space-y-4">
        <input
          placeholder="Enter Book Name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
        />
        <input
          placeholder="Enter Author Name..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
        >
          Add Book
        </button>
      </div>
    </div>
  );
}
