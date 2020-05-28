import React from "react";
import "./ToDoForm.css";

const toDoForm = (props) => {
  return (
    <div>
      <h2>ToDo Input Form</h2> <br />
      <div className="ToDoInputForm">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-keyboard"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            placeholder="Enter the item to add to do"
            onChange={props.addItemChanged}
            value={props.item}
          />
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="form-control btn btn-primary"
            onClick={props.addItemClick}
          >
            <i className="fas fa-plus"></i> Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default toDoForm;
