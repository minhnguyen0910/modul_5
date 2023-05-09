import './App.css';
import {Forms} from "./components/ss_05/Form";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Declare} from "./components/ss_05/Declare";
import {Array} from "./components/luyen_tap_es6/Array";
import {ToDoList} from "./components/ss_06/ToDoList";
import {Book} from "./components/ss_06/book/ManageBook";

import {CreateBook} from "./components/ss_06/book/CreateBook";
import {Route, Routes} from "react-router";
import {EditBook} from "./components/ss_06/book/EditBook";
function App() {
    return (
        <Routes>
            <Route path='/' element={<Book/>}/>
            <Route path='/create' element={<CreateBook/>} />
            <Route path='/edit/:id' element={<EditBook/>} />
        </Routes>
);
}
export default App;
