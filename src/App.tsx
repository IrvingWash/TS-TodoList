import { useState } from 'react';
import { ITodo } from './intefaces';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm onAddTodo={addTodoHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
