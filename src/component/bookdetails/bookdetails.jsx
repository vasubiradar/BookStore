import React from 'react';
import { useParams } from 'react-router-dom';
import images from './../../images';
import './bookdetails.css'

const BookDetails = ({ onSave, books, onWishlist }) => {
    const { id } = useParams();

    // If the 'id' parameter is not provided, display all books to the admin
    if (!id) {
        return (
            <section className="py-5">
                <div className="container">
                    <div>
                        {books.map(book => (
                            <div key={book.id} className="bookdetails">
                                <div className="col-md-4">
                                    <img className="card-img-top mb-5 mb-md-0" style={imageStyle} src={images[book.id]} alt="img" />
                                </div>
                                <div className="col-md-8 p-2">
                                    <h1 className="display-5 fw-bolder">{book.name}</h1>
                                    {/* <h1
                                    className="display-5 fw-bolder">{book.category}
                                    </h1> */}
                                    <div className="fs-5 mb-5">
                                        <span className="text">{`Price : ${book.price}$`}</span>
                                        <span className='m-5' style={{ color: "green" }}>Sale : 25%</span>
                                   
                                    </div>
                                    <p className="lead mb-5 w-50" style={{ color: "black" }}>{book.description}</p>
                                    <div className="d-flex ">
                                        <button className="btn btn-danger flex-shrink-1" onClick={() => onSave(book)} type="button">
                                            Add to cart
                                        </button>
                                        <button className="btn btn-outline-dark flex-shrink-1 mx-2" onClick={() => onWishlist(book)} type="button">
                                            WishList <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const book = books.find(element => element.id === id);

    if (!book) {
        return <div>Book not found</div>; // Handle the case when the book with the given id is not found
    }

    const imageStyle = {
        width: "250px",
        height: "400px",
        padding: "2px",
    };

return (
        <section className="py-5">
            <div className="container">
                <div className="bookdetails">
                    <div className="col-md-4">
                        <img className="card-img-top mb-5 mb-md-0" style={imageStyle} src={images[id]} alt="img" />
                    </div>
                    <div className="col-md-8 p-2">
                        {/* <h1 className="display-5 fw-bolder">{book.name}</h1> */}
                        <div className="fs-5 mb-5">
                            <span className="text">{`Price : ${book.price}$`}</span>
                            
                            <span className='m-5' style={{ color: "green" }}>Sale : 25%</span>
                        </div>
                        <p className="lead mb-5 w-50" style={{ color: "black" }}>"A book is a gateway to unexplored realms, a meeting with unseen souls, and a journey of boundless wonder." </p>
                        <div className="d-flex ">
                            <button className="btn btn-danger flex-shrink-1" onClick={() => onSave(book)} type="button">
                                Add to cart
                            </button>
                            <button className="btn btn-outline-dark flex-shrink-1 mx-2" onClick={() => onWishlist(book)} type="button">
                                WishList <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;