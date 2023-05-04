import {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div
                        className="container-fluid"
                        style={{backgroundColor: "#046056", height: 70}}
                    >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18, marginLeft: 100}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Giới Thiệu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Loại Phòng
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Ẩm Thực
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Hội Nghị Và Sự Kiện
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Spa
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Giải Trí
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Giải Trí
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        style={{color: "white", fontSize: 18}}
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Ưu Đãi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
