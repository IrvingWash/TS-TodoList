import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (title: string) => {
    console.log('Add new todo ', title);
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm onAddTodo={addTodoHandler} />
      </div>
    </>
  );
};

export default App;
