import React, { useState } from 'react'
import { ToDoProp } from "./TodoList";

export interface ToDoItemProps{
    todo:ToDoProp
}

export default function TodoItem(props: ToDoItemProps): JSX.Element {
  const { todo } = props;
    const [check, setCheck] = useState(todo.complete) //using list props
    const handleCheck = () => {
        setCheck(!check)
    }
   
  return (
    <div>
      <ul>
        <li className={check ? "complete" : ""} key={todo.id}>
          <input type="checkbox" checked={check} onChange={handleCheck}></input>
          {todo.task}
        </li>
      </ul>
    </div>
  );
}
