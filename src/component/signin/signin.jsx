import React, { useState } from "react";
import UserService from "../Services/UserServices";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = ({ setIsAuthenticated, setIsUser, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await UserService.getUsers();
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setIsAuthenticated(true);
        setIsUser(user.role === "user");
        setIsAdmin(user.role === "admin");

        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        localStorage.setItem("userEmail", JSON.stringify(user.email));
        localStorage.setItem("isUser", JSON.stringify(user.role === "user"));
        localStorage.setItem("isAdmin", JSON.stringify(user.role === "admin"));

        navigate(user.role === "admin" ? "/admin" : "/");
        window.location.reload(); // Ensure fresh state
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error logging in!", error);
    }
  };

  return (
    <div className="signin-form-container">
      <h2 className="signin-form-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="signin-input-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signin-input-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};

export default Signin;
