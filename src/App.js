import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoForm from "./ToDoForm/ToDoForm.js";
import ToDoList from "./ToDoList/ToDoList.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <br />
      <ToDoForm />
      <br />
      <br />
      <ToDoList />
    </div>
  );
}

export default App;
