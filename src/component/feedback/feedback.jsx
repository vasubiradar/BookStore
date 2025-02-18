import React, { useState } from 'react';
import './feedback.css'; // Make sure to include your CSS file here
import emailjs from 'emailjs-com';

const FeedbackForm = () => {
  const [to_name, setTo_Name] = useState("");
  const [book_name, setBook_Name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = () => {
    console.log(to_name + book_name + from_name + message);

    const emailContent = {
      to_name: to_name,
      book_name: book_name,
      from_name: from_name,
      message: message,
    };

    emailjs
      .send('service_yjppab1', 'template_p3p7r7g', emailContent, 'nA0Aub_GDr_1ohfcn')
      .then((result) => {
        console.log(result.text);
        // Display an alert when the email is sent successfully
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="feedback-form-overlay">
      <div className="feedback-form">
        <h1><strong>Give Feedback</strong></h1>
        <button className="close">×</button>
        <label>Your name</label>
        <input
          placeholder="Your name"
          type="text"
          tabIndex="1"
          onChange={(event) => {
            setTo_Name(event.target.value);
          }}
          required
          autoFocus
        />
        {/* <label>Book name</label>
        <input
          placeholder="Book name"
          type="text"
          tabIndex="2"
          onChange={(event) => {
            setBook_Name(event.target.value);
          }}
          required
        /> */}
        <label>Your Email Address</label>
        <input
          placeholder="Your Email Address"
          type="text"
          tabIndex="2"
          onChange={(event) => {
            setFrom_name(event.target.value);
          }}
          required
        />
        <label>About Book</label>
        <textarea
          placeholder="Type your message here...."
          type="text"
          tabIndex="3"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          required
        ></textarea>
        <button className="submit-btn" name="submit" type="button" onClick={submitInfo}>
          Send
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
