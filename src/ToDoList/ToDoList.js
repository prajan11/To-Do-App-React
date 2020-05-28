import React from "react";
import "./ToDoList.css";
import ToDoListItem from "../ToDoListItems/ToDoListItems.js";

const toDoList = (props) => {
  return (
    <div>
      <h2>ToDo List</h2>
      <div className="ToDoListContainer">
        {props.itemList.map((ind_list_item, index) => {
          return (
            <ToDoListItem
              item_name={ind_list_item.item}
              id={index}
              key={index}
              editItem={props.editItemIndex === index ? true : false}
              deleteListItem={() => props.deleteListItem(index)}
              editListItem={() => props.editListItem(index)}
            />
          );
        })}

        <button
          type="button"
          className="btn form-control btn-danger mt-4"
          onClick={props.clearList}
        >
          <i className="fas fa-minus-circle"></i> Clear List
        </button>
      </div>
    </div>
  );
};

export default toDoList;
