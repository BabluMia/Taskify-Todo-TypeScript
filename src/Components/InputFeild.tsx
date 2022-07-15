import React, { useRef } from "react";
import "./Input.css";
type TodoType = {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputFeild: React.FC<TodoType> = ({
  todo,
  setTodo,
  handleAdd,
}: TodoType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        value={todo}
        ref={inputRef}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Inter A Task"
        name="task"
        className="input_box"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
