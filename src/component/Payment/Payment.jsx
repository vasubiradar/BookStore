import React, { useState } from 'react';
import './Payment.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';
import TableComponent from './shoppingcart';
import { getFromLocalStorage } from "../Services/localStorageUtil";

import axios from 'axios';

const Payment = ({cartBook, images,  total}) => {
  const s11 = "http://localhost:8080/userBill";
  
   

  const [billingData, setBillingData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    paymentMethod: '',
  });

  const handleBillingChange = (event) => {
    const { name, value } = event.target;
    setBillingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentData((prevData) => ({
      ...prevData,
      paymentMethod: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Order placed successfully!');
    // You can handle navigation here using window.location or any other method suitable for your application
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title"><b>Billing Process</b></h3>
            <div className="inputBox">
              <span>Full Name :</span>
              <input
                type="text"
                name="fullName"
                placeholder="enter your full name"
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="inputBox">
              <span>Email :</span>
              <input
                type="text"
                name="email"
                placeholder="example@example.com"
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="inputBox">
              <span>Address :</span>
              <input
                type="text"
                name="address"
                placeholder="place -Street - Locality"
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="inputBox">
              <span>City :</span>
              <input
                type="text"
                name="city"
                placeholder="Mumbai"
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>State :</span>
                <input
                  type="text"
                  name="state"
                  placeholder="Goa"
                  onChange={handleBillingChange}
                  required
                />
              </div>
              <div className="inputBox">
                <span>Zip Code :</span>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="123 456"
                  onChange={handleBillingChange}
                  required
                />
              </div>
            </div>
          </div>
          <h2><strong>Shopping Details</strong></h2>
    </div><TableComponent
          cartBook={cartBook}
          images={images}
          // onDecrement={onDecrement}
          // onIncrement={onIncrement}
          // onDelete={onDelete}
        />
          <div className="col">
            <h3 className="title"><b>Payment</b></h3>
            <div className="payment-options">
              <div className="payment-option">
              <img src="https://e7.pngegg.com/pngimages/665/503/png-clipart-visa-mastercard-and-paypal-logos-payment-credit-card-debit-card-logo-mastercard-paypal-text-service-thumbnail.png"alt="Cards" />
              <br></br>  <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  onChange={handlePaymentMethodChange}
                  required
                />
                <label>Credit/Debit Card</label><br></br>
              </div>
              <div className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="phonepe"
                  onChange={handlePaymentMethodChange}
                  required
                />
                <label>PhonePe</label><br></br>
              </div>
              <div className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="gpay"
                  onChange={handlePaymentMethodChange}
                  required
                />
                <label>GPay</label><br></br>
              </div>
              
            </div>
            {paymentData.paymentMethod === 'card' && (
              <div className="card-details">
                <div className="inputBox">
                  <span>Name on Card :</span>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Mr/Mrs..."
                    onChange={handlePaymentChange}
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>Credit Card Number :</span>
                  <input
                    type="number"
                    name="cardNumber"
                    placeholder="1111-2222-3333-4444"
                    onChange={handlePaymentChange}
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>Exp Month :</span>
                  <input
                    type="text"
                                        name="expMonth"
                    placeholder="January"
                    onChange={handlePaymentChange}
                    required
                  />
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>Exp Year :</span>
                    <input
                      type="number"
                      name="expYear"
                      placeholder="2022"
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>CVV :</span>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="1234"
                      onChange={handlePaymentChange}
                      required
                    />
                    
                  </div>
                  
                  <div className="inputBox">
                  <span>Enter Number</span>
                  <input
                    type="text"
                    name="Number"
                    placeholder="Enter Number"
                    
                    onChange={handlePaymentChange}
                    required
                  />
                  <br></br>
               
      {/* <button class="verify-button">Send OTP</button> */}
    </div>
    
             
                <div class="verify-phone">
      {/* <input type="text" class="input" placeholder="Enter your phone number"/>
<br></br> */}

      <button class="verify-button">Verify</button>
    </div>
               
               
                
                </div>
              </div>
            )}
            {paymentData.paymentMethod === 'phonepe' && (
              <div className="phonepe-details">
                <div className="inputBox">
                  <span>PhonePe Number :</span>
                  <input
                    type="text"
                    name="phonepeNumber"
                    placeholder="Enter PhonePe number"
                    
                    onChange={handlePaymentChange}
                    required
                  />
                   {/* <button class="verify-button">Verify</button> */}
                </div>
             
                <div class="verify-phone">
    
      <button class="verify-button">Verify</button>
    </div>
              </div>
            )}
            {paymentData.paymentMethod === 'gpay' && (
              <div className="gpay-details">
                <div className="inputBox">
                  <span>GPay Number :</span>
                  <input
                    type="text"
                    name="gpayNumber"
                    placeholder="Enter GPay number"
                    onChange={handlePaymentChange}
                    required
                  />
                </div>
                {/* <div class="verify-phone">
     
      <button class="verify-button">Send OTP</button>
    </div>
                <div className="inputBox">
                  <span>OTP</span>
                  <input
                    type="text"
                    name="OTP"
                    placeholder="Enter OTP"
                    
                    onChange={handlePaymentChange}
                    required
                  />
                  
                </div> */}
               
                <div class="verify-phone">
    
      <button class="verify-button">Verify</button>
    </div>
              </div>
            )}
{/* Render the imported table component */}
{/* <TableComponent
          cartBook={cartBook}
          images={images}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          // onDelete={onDelete}
        /> */}
        </div> 
     
          <button  className="vasu">
          <Link to="/feedback" type="submit" value="Continue">
          <strong>Continue</strong>
           </Link>
            </button>

   
          <Link to="/shoppingcart" className="btn w-50 ">
              
              </Link>
      </form>
    </div>
  );
};

export default Payment;