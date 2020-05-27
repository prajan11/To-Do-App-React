import React from "react";
import "./ToDoListItem.css";

const toDoListItem = () => {
  return (
    <div>
      <div className="ListItem">
        List Item 1
        <div className="edit-remove-buttons">
          <button type="button" className="btn btn-sm btn-success" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger ml-1"
            title="Delete"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default toDoListItem;
