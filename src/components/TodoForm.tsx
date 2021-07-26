import React, { useState } from 'react';

export const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const todoSubmitHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(todo);
      setTodo('');
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        type='text'
        id='title'
        placeholder='Enter a todo'
        onChange={inputChangeHandler}
        onKeyPress={todoSubmitHandler}
        value={todo}
      />
      <label htmlFor='title' className='active'>
        Enter a todo
      </label>
    </div>
  );
};
