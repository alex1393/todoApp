import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import "./app.css";
import ItemAddForm from "../item-add-form/item-add-form";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    filter: "all",
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  toggleProperty = (arr, id, property) => {
    this.setState(() => {
      let newArray = this.state[arr].map((item) => {
        if (item.id === id) {
          return { ...item, [property]: !item[property] };
        }
        return item;
      });
      return { [arr]: newArray };
    });
  };
  onToggleDone = (id) => {
    this.toggleProperty("todoData", id, "done");
  };
  onToggleImportant = (id) => {
    this.toggleProperty("todoData", id, "important");
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    return items.filter((item) => {
      if (term.length === 0) {
        return item;
      }
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  filterItems = (data, filter) => {
    switch (filter) {
      case "all":
        return data;
        break;
      case "active":
        return data.filter((el) => !el.done);
        break;
      case "done":
        return data.filter((el) => el.done);
        break;
      default:
        return data;
    }
  };
  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.search(this.filterItems(todoData, filter), term);
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
