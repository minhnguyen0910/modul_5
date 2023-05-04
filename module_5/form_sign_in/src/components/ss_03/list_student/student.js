import {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [{id: 1, name: "Minh", age: 24, address: "Nghe An"},
                {id: 2, name: "QAnh", age: 22, address: "Quang Tri"},
                {id: 3, name: "Chinh", age: 20, address: "Quang Tri"}]
        }
    }

    render() {
        return (
            <>
                <h1>Danh Sach Hoc Vien</h1>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Tuoi</th>
                        <th>Que Quan</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </>
        );
    }
}