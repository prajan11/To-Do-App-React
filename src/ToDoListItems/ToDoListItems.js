import React from "react";
import "./ToDoListItem.css";

const toDoListItem = (props) => {
  return (
    <div>
      <div className="ListItem">
        {props.item_name}
        <div className="edit-remove-buttons">
          <button
            type="button"
            className="btn btn-sm btn-success"
            title="Edit"
            onClick={props.editListItem}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger ml-1"
            title="Delete"
            onClick={props.deleteListItem}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default toDoListItem;
