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

  render() {
    return (
      <div className="App">
        <br />
        <ToDoForm
          addItemChanged={this.toDoItemChanged}
          addItemClick={this.addItemToList}
          item={this.state.ind_item}
        />
        <br />
        <br />
        <ToDoList
          itemList={this.state.todoItem}
          clearList={this.clearToDoList}
        />
      </div>
    );
  }
}

export default App;
