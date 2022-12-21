import React from "react";
import './todo-list-item.css';
const TodoListItem = ({ label, important }) => {
    const style = {
        color: important === true? 'tomato' : 'black'
    }

    return <span
                className='todo-list-item'
                style={style}>
                { label }
            </span>
}

export default TodoListItem;