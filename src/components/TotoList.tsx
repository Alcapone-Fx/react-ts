import React from 'react';

import { Todo } from '../todo.model';

import './TodoList.css';

type TodoListProps = {
  items: Todo[];
  onTodoDelete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onTodoDelete }) => {
  return (
    <ul>
      {items.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={onTodoDelete.bind(null, id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
