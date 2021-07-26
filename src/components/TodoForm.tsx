export const TodoForm = () => {
  return (
    <div className='input-field mt2'>
      <input type='text' id='title' placeholder='Enter a todo' />
      <label htmlFor='title' className='active'>
        Enter a todo
      </label>
    </div>
  );
};
