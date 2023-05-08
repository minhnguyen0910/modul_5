import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {findAll} from "./BookService";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";

export function Book() {
    const [book, setBook] = useState([])
    useEffect(() => {
     const Api=async ()=>{
         const result=await findAll()
         setBook(result)
     }
     Api();
    })
    return (
        <>
            <h3>Library</h3>
            <button>
                <Link to='/create'>Create</Link>
            </button>
            <table className='table'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {book.map((b) => (
                    <tr>
                        <td>{b.title}</td>
                        <td>{b.qtt}</td>
                        <td>
                            <button type="button" className="btn btn-info" style={{marginRight:'2px'}}>Sửa</button>
                            <button type="button" className="btn btn-info">Xoá</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}