import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteById, getAllUsers} from "../redux/action/action";
import 'bootstrap/dist/css/bootstrap.min.css';


export function ListUser() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    const handleDelete = async (id) => {
        dispatch(deleteById(id))
        dispatch(getAllUsers())
    }
    return (
        <>
            <h1>List User</h1>
            <table className='table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Web side</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(value => (
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.website}</td>
                        <td>
                            <button onClick={() => {
                                handleDelete(value.id)
                            }} type="button" className="btn btn-danger">Xoa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}