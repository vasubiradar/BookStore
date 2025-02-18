import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./edit.css"
import { useState } from 'react';
import axios from 'axios';

const Edit = () => {

    const [items, setItems] = useState([]);
    const s11 = "http://localhost:8080/books";

    axios.get(s11)
    .then( (response) => {
        setItems(response.data);
    })
    .catch( (error) => {
        console.error(error);
    } )
    const onDelete = (id) =>{
        const s12 = "http://localhost:8080/books/"+id;

        axios.delete(s12)
        .then( (response) => {
            console.log("Deleted")
        })
        .catch( (error) => {
            console.error(error);
        } )

       
    }
   

    return (
        <div>
            <table className="table mx-auto w-75">
                <thead className="thead-dark me-auto">
                    <tr>
                        <th scope="col">Book id</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Price</th>
                        
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                           
                            <td>
                                <i
                                    id={`books ${item.id}`}
                                    className="fas fa-trash delete"
                                    onClick={() => onDelete(item.id)}
                                ></i>{" "}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

} 

export default Edit;