import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoForm from "./ToDoForm/ToDoForm.js";
import ToDoList from "./ToDoList/ToDoList.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    todoItem: [],
    id: 0,
    ind_item: "",
    edit_item: false,
    edit_item_index: 0,
  };

  toDoItemChanged = (event) => {
    this.setState({
      ind_item: event.target.value,
    });
  };

  addItemToList = () => {
    if (this.state.ind_item !== "") {
      const inputtedToDoItem = {
        id: this.state.id,
        item: this.state.ind_item,
      };

      const toDoItemUpdated = [...this.state.todoItem, inputtedToDoItem];

      this.setState({
        todoItem: toDoItemUpdated,
        ind_item: "",
      });
    }
  };

  clearToDoList = () => {
    this.setState({
      todoItem: [],
    });
  };

  deleteListItem = (id) => {
    const newToDoList = this.state.todoItem.filter((ind_item, index) => {
      return index !== id;
    });
    this.setState({
      todoItem: newToDoList,
    });
  };

  editListItem = (id) => {
    const copyOfToDoList = [...this.state.todoItem];
    const itemToEdit = copyOfToDoList.splice(id, 1)[0].item;
    // console.log(itemToEdit);
    // console.log(this.state.todoItem);
    this.setState({
      ind_item: itemToEdit,
      edit_item: true,
      edit_item_index: id,
    });
    // console.log(this.state.edit_item);
  };

  editItemFromList = () => {
    if (this.state.edit_item_index !== null) {
      const copyOfToDoItem = [...this.state.todoItem];
      const updatedToDo = copyOfToDoItem.map((ind_item, index) => {
        if (this.state.edit_item_index === index) {
          ind_item.item = this.state.ind_item;
        }
        return ind_item;
      });
      this.setState({
        todoItem: updatedToDo,
        edit_item_index: null,
        ind_item: "",
        edit_item: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <br />
        <ToDoForm
          addItemChanged={this.toDoItemChanged}
          addItemClick={this.addItemToList}
          item={this.state.ind_item}
          editItem={this.state.edit_item}
          editItemClick={this.editItemFromList}
        />
        <br />
        <br />
        <ToDoList
          itemList={this.state.todoItem}
          clearList={this.clearToDoList}
          deleteListItem={this.deleteListItem}
          editListItem={this.editListItem}
        />
      </div>
    );
  }
}

export default App;
