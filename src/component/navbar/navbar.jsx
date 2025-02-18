import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import NavTop from "./navtop";
import "./navbar.css";
import Books from "../db";
import { getFromLocalStorage } from "../Services/localStorageUtil";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [cartNum, setCartNum] = useState([]);
  const [wishCount, setWishCount] = useState(0);

  // Get the authentication and role data from localStorage
  const isAuthenticated = getFromLocalStorage("isAuthenticated");
  const isAdmin = getFromLocalStorage("isAdmin");

  useEffect(() => {
    const emailFromStorage = getFromLocalStorage("userEmail") || "";
    setEmail(emailFromStorage);

    const cartBooks = Books.filter((element) => element.isInCart === true);
    const wishlistBooks = Books.filter((element) => element.wishlist === true);
    setCartNum(cartBooks);
    setWishCount(wishlistBooks.length);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage on logout
    window.location.reload(); // Reload to update the UI
  };

  return (
    <>
      <NavTop />
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-danger logo h1" to="/">
            <h1>
              BookHub
              <span className="text-black">
                <h5>Valley of Knowledge</h5>
              </span>
            </h1>
          </Link>

          <div className="align-self-center">
            <ul className="nav navbar-nav d-lg-inline-flex">
              {isAdmin ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin Page
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/allbooks">
                      All Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/wishlist">
                      Wishlist
                      <i
                        className={
                          wishCount > 0 ? "fas fa-heart text-danger" : "far fa-heart"
                        }
                      ></i>
                    </Link>
                  </li>
                </>
              )}

              {/* Shopping Cart Link */}
              <div className="nav-item mt-2">
                <NavLink
                  className="nav-icon position-relative text-decoration-none"
                  to="/shoppingcart"
                >
                  <i className="fa fa-fw fa-cart-arrow-down text-dark" />
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    {cartNum.length}
                  </span>
                </NavLink>
              </div>

              {isAuthenticated ? (
                <li className="nav-item">
                  <Link className="profile-btn nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link sign-in-btn" to="/signin">
                    Sign In
                  </Link>
                </li>
              )}

              {isAuthenticated && (
                <li className="nav-item">
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
