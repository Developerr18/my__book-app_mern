export default function BookList({ books, deleteBook }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Book Library</h2>
      {books.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No books added yet. Add your first book above!
        </p>
      ) : (
        <ul className="space-y-3">
          {books.map((book) => (
            <li
              key={book._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            >
              <div className="flex-1">
                <span className="font-medium text-gray-800">{book.title}</span>
                <span className="text-gray-600"> - </span>
                <span className="text-gray-600 italic">{book.author}</span>
              </div>
              <button
                onClick={() => deleteBook(book._id)}
                className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-all duration-150 transform hover:scale-110"
                title="Delete book"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
