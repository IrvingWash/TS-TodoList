import React, { useRef } from 'react';

export const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(inputRef.current!.value);
      inputRef.current!.value = '';
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        type='text'
        id='title'
        ref={inputRef}
        placeholder='Enter a todo'
        onKeyPress={todoSubmitHandler}
      />
      <label htmlFor='title' className='active'>
        Enter a todo
      </label>
    </div>
  );
};
