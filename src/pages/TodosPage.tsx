import React, { useState, useEffect } from 'react';
import { ITodo } from '../intefaces';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleCompletedHandler}
        onRemove={removeTodoHandler}
      />
    </>
  );
};
