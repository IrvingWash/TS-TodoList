import { useState } from 'react';
import { ITodo } from './intefaces';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

declare var confirm: (question: string) => boolean;

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

  const toggleCompletedHandler = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodoHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to delete this todo?');
    if (shouldRemove) {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm onAddTodo={addTodoHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleCompletedHandler}
          onRemove={removeTodoHandler}
        />
      </div>
    </>
  );
};

export default App;
