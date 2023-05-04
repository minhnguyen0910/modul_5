import {Component} from "react";

export class ListOrder extends Component {
    render() {
        return (
            <>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    <tr>
                        <td>1</td>
                        <td>Minh</td>
                        <td>Phòng vip</td>
                        <td>12/12/2022</td>
                        <td>15/12/2022</td>
                        <td>500$</td>
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
                    </tbody>
                </table>
                <div className="container d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
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
        );
    }
}