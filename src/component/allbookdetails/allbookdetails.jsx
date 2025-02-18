import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookService from "../Services/bookService"; // Adjust the path to your service file
import "../bookdetails/bookdetails.css";

const Bookid = ({ addToCart, addToWishlist }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookService
      .getBookById(id)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setError("Failed to load book details. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="book-detail-page">
      <div className="bookdetails">
        <div>
          <h1>{book.name}</h1>
          <img
            src={book.img}
            alt={book.name}
            onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
          />
        </div>
        <div>
          <p>{book.description}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <p>Discount: {book.discount}%</p>
          <button onClick={() => addToCart(book.id)}>Add to Cart</button>
          <button onClick={() => addToWishlist(book.id)}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Bookid;
