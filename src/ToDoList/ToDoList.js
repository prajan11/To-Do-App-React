import React from "react";
import "./ToDoList.css";
import ToDoListItem from "../ToDoListItems/ToDoListItems.js";

const toDoList = () => {
  return (
    <div>
      <h2>ToDo List</h2>
      <div className="ToDoListContainer">
        <ToDoListItem />
        <button type="button" className="btn form-control btn-danger mt-4">
          <i class="fas fa-minus-circle"></i> Clear List
        </button>
      </div>
    </div>
  );
};

export default toDoList;
