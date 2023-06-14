import React from 'react';

function TodoItem(props) {
    const { todo } = props;

    return (
        <li className={todo.completed ? 'completed' : ''}>
            <span>{todo.todo}</span>
        </li>
    );
}

export default TodoItem;
