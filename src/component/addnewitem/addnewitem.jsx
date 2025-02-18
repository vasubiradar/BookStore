import React, { useState } from "react";
import BookService from "../Services/bookService";
import { useNavigate } from "react-router-dom";
import "./addnewitem.css"; // Custom styling for AddBook form

const AddNewItem = () => {
  const [name, setName] = useState(""); // Book name
  const [img, setImg] = useState(""); // Book image URL
  const [description, setDescription] = useState(""); // Book description
  const [price, setPrice] = useState(""); // Book price
  const [discount, setDiscount] = useState(""); // Discount percentage
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      name: name,
      img: img,
      description: description,
      price: parseFloat(price), // Ensure price is converted to a number
      discount: parseFloat(discount), // Ensure discount is converted to a number
    };

    BookService.addBook(newBook)
      .then(() => {
        alert("Book added successfully!");
        navigate("/allbooks"); // Redirect to the books list page after adding the book
      })
      .catch((error) => console.error("Error adding the book:", error));
  };

  return (
    <div className="addbook-form-container">
      {/* Title Section */}
      <div className="addbook-form-header">
        <h1 className="addbook-page-title">Welcome to the Book Store</h1>
        <p className="addbook-description-title">
          Fill in the details below to add a new book to the collection!
        </p>
      </div>

      {/* Add New Book Form */}
      <h2 className="addbook-form-title">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="addbook-form">
        <div className="addbook-input-field">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="addbook-input-field">
          <label>Image URL:</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <div className="addbook-input-field">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="addbook-input-field">
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="addbook-input-field">
          <label>Discount (%):</label>
          <input
            type="number"
            step="0.01"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="addbook-submit-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
