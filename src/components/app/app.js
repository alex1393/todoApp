import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import "./app.css";
import ItemAddForm from "../item-add-form/item-add-form";

export default class App extends Component {
  constructor() {
    super();
  }

  state = {
    todoData: [
      { label: "Drink coffee", id: 1 },
      { label: "Make Awesome App", id: 2 },
      { label: "Have a lunch", id: 3 },
    ],
  };

  deleteItem = (id) => {
    let newTodoData = [];
    this.setState(() => {
      this.state.todoData.map((item) => {
        if (item.id !== id) newTodoData.push(item);
      });
      return {
        todoData: newTodoData,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.state.todoData.length + 1,
    };

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
