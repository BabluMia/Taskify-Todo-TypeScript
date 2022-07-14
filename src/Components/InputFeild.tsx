import React from 'react'
import './Input.css'
type TodoType = {
    todo: string | number,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputFeild:React.FC<TodoType> = ({todo,setTodo}:TodoType) => {
   
  return (
    <form action=""  className='input'>
        <input type="text" placeholder='Inter A Task' name='task' className='input_box' />
        <button type='submit'  className='input_submit'>Go</button>
    </form>
  )
}

export default InputFeild