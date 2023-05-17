import React, { useState } from 'react';

import TodoList from './components/TotoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onTodoDelete={deleteTodoHandler}/>
    </div>
  );
};

export default App;
