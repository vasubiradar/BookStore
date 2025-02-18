import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
// import "./profile";
// book;

const Admin = () => {
  return (
    <React.Fragment>
      <div className="titleabout fw-bold text-center">
        <h2 className="text-black">Welcome to Admin Page</h2>
      </div>
      <div className="editTable">
        <div className="box">
            <h4>Add new book</h4>
          <Link className="btn btn-danger rounded-pill mt-5 mr-5" to={"./addnewitem"}>
            Add Item Here <i className="fas fa-plus"></i>
          </Link>
        </div>
        <div className="box">
        <h4>Update Books</h4>
          <Link className="btn btn-danger rounded-pill mt-5 mr-5" to={"./edit"}>
            Update item here
          </Link>
          
        </div>
        <br></br>

       
      
      </div>
     
    </React.Fragment>
  );
};

export default Admin;
