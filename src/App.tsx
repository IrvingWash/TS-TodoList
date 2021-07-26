import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm />
      </div>
    </>
  );
};

export default App;
