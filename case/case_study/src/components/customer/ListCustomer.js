import {Header} from "../header";
import React from "react";
import {Footer} from "../footer";
import {listCustomer} from "./Customer";

export function ListCustomer() {
    return (
        <>
            <Header/>
            <h1 style={{textAlign: "center", marginTop: 50, marginBottom: 50}}>
                Danh Sách Khách Hàng
            </h1>
            <table
                className="table table-success table-striped"
                style={{marginBottom: 100, textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Năm Sinh</th>
                    <th>Kiểu Khách Hàng</th>
                    <th>Tác Vụ</th>
                </tr>
                </thead>
                <tbody>
                {listCustomer.map((customer,index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>{customer.name}</td>
                            <td>{customer.year}</td>
                            <td>{customer.type}</td>
                            <td>
                                <button type="button" className="btn btn-secondary">
                                    Sửa
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Footer/>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                style={{textAlign: "center"}}
                                className="modal-title"
                                id="exampleModalLabel"
                            >
                                Xác nhận xoá dịch vụ
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button type="button" className="btn btn-primary">
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}