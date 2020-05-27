import React from "react";
import "./ToDoForm.css";

const toDoForm = () => {
  return (
    <div>
      <h2>ToDo Input Form</h2> <br />
      <div className="ToDoInputForm">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i className="fas fa-keyboard"></i>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            placeholder="Enter the item to add to do"
          />
        </div>
        <div className="mt-4">
          <button type="button" className="form-control btn btn-primary">
            <i class="fas fa-plus"></i> Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default toDoForm;
