import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";
const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, styleDisplay, ...itemProps } = item;
    return (
      <li
        className="list-group-item"
        key={id}
        style={{ display: styleDisplay }}
      >
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
