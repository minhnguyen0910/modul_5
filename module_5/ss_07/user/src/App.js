import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ListUser} from "./components/List";

function App() {
  return (
  <Routes>
    <Route path={`/`} element={<ListUser/>}/>
  </Routes>
  );
}

export default App;
