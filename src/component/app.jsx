import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddNewItem from "./addnewitem/addnewitem";
import Admin from "./admin/admin";
import Edit from "./edit/edit";
import ShoppingCart from "./shoppingcart/shoppingcart";
import BookDetails from "./bookdetails/bookdetails";
import HomePage from "./homepage/homepage";
import SignIn from "./signin/signin";
import Navbar from "./navbar/navbar";
import Books from "./db";
import AllBooks from "./allbooks/allbooks";
import Wishlist from "./wishlist/wishilst"
// import Footer from "./footer/footer";
import './app.css';
import AboutUs from './aboutus/aboutus';
// import Feedback from './feedback/feedback';
import Register from "./register/register";
// import Payment from "./Payment/Payment";
import Profile from "./profile/profile";
// import Contact from "./contact/contact";
import Bookid from "./allbookdetails/allbookdetails";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profilepop, setProfilepop] = useState(true);
  const [books, setBooks] = useState(Books);
  const [user, setUser] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsUser(false);
    setIsAdmin(false);
    setProfilepop((prevState) => !prevState);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const onWishlist = (book) => {
    book.wishlist = true;
    setBooks([...books], books);
  };

  const onCart = (book) => {
    book.isInCart = true;
    book.count++;
    setBooks([...books], books);
  };

  const handleRemoveItem = (book) => {
    if (book.wishlist === true) {
      book.wishlist = false;
    }
    book.isInCart = false;
    setBooks([...books], books);
  };

  const handleDelete = (book) => {
    const newbooks = books.filter((p) => book.id !== p.id);
    setBooks(newbooks);
  };

  const handleIncrement = (book) => {
    const index = books.indexOf(book);
    books[index].count++;
    setBooks(books);
  };

  const handleDecrement = (book) => {
    if (book.count >= 1) {
      book.count--;
    } else {
      alert("The count cannot be less than one item");
    }
    setBooks(books);
  };

  return (
    <React.Fragment>
      <Navbar
        books={books}
        user={user}
        setUser={setUser}
        isAuthenticated={isAuthenticated}
        isUser={isUser}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onSave={onCart} books={books} />}
          />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                setIsUser={setIsUser}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route path="/register" element={<Register setUser={setUser} />} />
          {/* <Route path="/payment" element={<Payment setUser={setUser} />} /> */}
          <Route path="/profile" element={<Profile setUser={setUser} />} />
          {/* <Route path="/contact" element={<Contact setUser={setUser} />} /> */}
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/feedback" element={<Feedback />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/admin/edit"
            element={<Edit books={books} onDelete={handleDelete} />}
          />
          <Route
            path="/allbooks"
            element={<AllBooks books={books} />}
          />
          <Route path="/book/:id" element={<Bookid />} />
          <Route
            path="/admin/addnewitem"
            element={<AddNewItem books={books} setBooks={setBooks} />}
          />
          <Route
            path="/bookdetails/:id"
            element={
              <BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />
            }
          />
          <Route
            path="allbooks/bookdetails/:id"
            element={
              <BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />
            }
          />
          <Route
            path="wishlist/bookdetails/:id"
            element={
              <BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />
            }
          />
          <Route
            path="/wishlist"
            element={<Wishlist books={books} onDelete={handleRemoveItem} />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                books={books}
                onSave={onCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleRemoveItem}
              />
            }
          />
        </Routes>
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;
