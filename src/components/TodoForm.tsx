import React, { useRef } from 'react';

interface TodoFormProps {
  onAddTodo(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAddTodo(inputRef.current!.value);
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
