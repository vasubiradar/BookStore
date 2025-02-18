import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookService from "../Services/bookService"; // Adjust the path to your service file
import "./allbooks.css"; // Optional: Add your CSS file for styling

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookService
      .getBooks()
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="books-page">
      <h1>All Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <Link to={`/book/${book.id}`}>
              <img
                src={book.img}
                alt={book.name}
                className="book-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
