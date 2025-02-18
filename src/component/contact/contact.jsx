import { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = () => {
    console.log(toName + fromName + message);

    const emailContent = {
      to_name: toName,
      from_name: fromName,
      message: message,
    };

    emailjs
      .send("service_yjppab1", "template_p3p7r7g", emailContent, "nA0Aub_GDr_1ohfcn")
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <form className="contact-form">
        <h1 className="contact-heading">Contact Us</h1>
        <input
          className="contact-input"
          placeholder="Your Name"
          type="text"
          onChange={(event) => setToName(event.target.value)}
          required
        />
        <input
          className="contact-input"
          placeholder="Your Email Address"
          type="email"
          onChange={(event) => setFromName(event.target.value)}
          required
        />
        <textarea
          className="contact-textarea"
          placeholder="Type your message here..."
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
        <button className="contact-submit-button" type="button" onClick={submitInfo}>
          Submit
        </button>
        <p className="contact-copyright">
          Designed by{" "}
          <a href="http://localhost:3000//" target="_blank" rel="noopener noreferrer">
            Bookstore
          </a>
        </p>
      </form>
    </div>
  );
}

export default Contact;
