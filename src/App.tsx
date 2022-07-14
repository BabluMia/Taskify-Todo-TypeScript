import React, { useState } from 'react';
import './App.css';
import InputFeild from './Components/InputFeild';

const App:React.FC =()=> {
  const [todo,setTodo] = useState<string>('')
  return (
    <div className='App'>
    <span className='header'>TASKIFY</span>
    <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
