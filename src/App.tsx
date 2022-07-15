import React, { useState } from 'react';
import './App.css';
import InputFeild from './Components/InputFeild';
import { Todo } from './Components/Model';
import TodoList from './Components/TodoList';

const App:React.FC =()=> {
  const [todo,setTodo] = useState<string>('')
  
  const [todos,setTodos] = useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    
  }
  console.log(todos);
  return (
    <div className='App'>
    <span className='header'>TASKIFY</span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    {/* todo */}
    {/* {todos.map(sTodo => <h4 key={sTodo.id}>{sTodo.todo}</h4>)} */}
    <TodoList Todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
