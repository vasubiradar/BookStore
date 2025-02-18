import React, { useState } from "react";
import "./profile.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Profile = ({ isAuthenticated, handleLogout, isAdmin }) => {
  const storedUsername = localStorage.getItem("username") || "Guest";
  const storedEmail = localStorage.getItem("userEmail") || "guest@example.com";
  
  // Book like state
  const [likedBooks, setLikedBooks] = useState([]);

  const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" },
  ];

  const handleLikeBook = (bookId) => {
    if (!likedBooks.includes(bookId)) {
      setLikedBooks([...likedBooks, bookId]);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          className="profile-image"
          src="https://th.bing.com/th/id/OIP.76-Dy-uV8aQOscWGkbPWIgHaHu?w=188&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Profile"
        />
        <h2 className="profile-name">{storedUsername}</h2>
        <p className="profile-email">Email: {storedEmail}</p>
        <p className="profile-bio">
          Hello, I’m {storedUsername}! Welcome to my profile. I love exploring
          books and sharing knowledge. Feel free to browse around!
        </p>

        <div className="profile-actions">
          {isAuthenticated ? (
            <div>
              <Link className="profile-link" to="/profile">
                <button className="profile-btn">My Profile</button>
              </Link>
              <Link to="/" onClick={handleLogout} className="profile-link">
                <button className="logout-btn">Logout</button>
              </Link>
              {isAdmin && (
                <Link className="profile-link" to="/admin">
                  <button className="admin-btn">Admin Dashboard</button>
                </Link>
              )}
            </div>
          ) : (
            <Link to="/register" className="profile-link">
              <button className="register-btn">Register / Login</button>
            </Link>
          )}
        </div>
      </div>

      <div className="profile-info">
        <h3>About Me</h3>
        <p>
          I’m a passionate book enthusiast who enjoys learning and sharing
          knowledge with others. Whether it's fiction or non-fiction, every
          book has a story to tell!
        </p>

        <h3>My Interests</h3>
        <ul>
          <li>📚 Reading Books</li>
          <li>🌍 Exploring New Genres</li>
          <li>🎨 Creative Writing</li>
        </ul>
      </div>

      {/* <div className="free-books-section">
        <h3>Free Books I Like</h3>
        {books.map((book) => (
          <div className="book-item" key={book.id}>
            <span className="book-title">{book.title}</span>
            <button
              className="like-btn"
              onClick={() => handleLikeBook(book.id)}
            >
              {likedBooks.includes(book.id) ? "Liked" : "Like"}
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Profile;
