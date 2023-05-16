import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {deleteBook, findAll, searchBook} from "./BookService";
import {Link, useNavigate} from "react-router-dom";


export function Book() {
    const navigate=useNavigate()
    const [book, setBook] = useState([]);
    useEffect(() => {
        const Api = async () => {
            const result = await findAll()
            setBook(result)
        }
        Api();

    },[])
    const handleDelete = async (id) => {
        await deleteBook(id)
        setBook(prevState => prevState.filter(prev => prev.id !== id))
    }
    const handleSearch = async () => {
        let id = document.getElementById('idBook').value;
        const result = await searchBook(id);
        setBook(result)
    }
    return (

        <>
            <h3>Library</h3>
            <button>
                <Link to='/create'>Create</Link>
            </button>
            <input id='idBook' type="number" placeholder='nhap id'/>
            <button onClick={handleSearch}>Search</button>
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
                    <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{b.qtt}</td>
                        <td>
                            <button type="button" className="btn btn-info" style={{marginRight: '2px'}}><Link
                                to={`/edit/${b.id}`}>Sua</Link></button>
                        </td>
                        <td>
                            <button className="btn btn-info" onClick={() => handleDelete(b.id)}>Xoá</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}