import {listContract} from "./Contract";
import {Header} from "./header";
import React from "react";
import {Footer} from "./footer";

export function ListContract() {
    return (
        <>
            <Header/>
            <h1 style={{textAlign: "center", marginTop: 50, marginBottom: 50}}>
                Danh Sách Hợp Đồng
            </h1>
            <table
                className="table table-success table-striped"
                style={{marginBottom: 100, textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Người thuê</th>
                    <th>Tên dịch vụ</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Giá</th>
                    <th>Tác vụ</th>
                </tr>
                </thead>
                <tbody>
                {listContract.map((contract,index) => {
                    return <tr>
                        <td>{index}</td>
                        <td>{contract.name}</td>
                        <td>{contract.nameRoom}</td>
                        <td>{contract.start}</td>
                        <td>{contract.end}</td>
                        <td>{contract.price}</td>
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
                })}

                </tbody>
            </table>
            <Footer/>
        </>
    )
}