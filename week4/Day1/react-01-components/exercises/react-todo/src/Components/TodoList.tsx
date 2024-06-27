import React, { useState } from "react";
import TodoItem from "./TodoItem";

export interface ToDoProp {
  id: number;
  task: string;
  complete: boolean;
}
export interface TodoListProps{
  todosArray:ToDoProp[]
}

export default function TodoList(props: TodoListProps):JSX.Element {
  const { todosArray } = props
    return (
      <>
        <div>
          {todosArray.map((todoItem: any) => (
            <TodoItem todo={todoItem} key={todoItem.id} />
          ))}
         
        </div>
      </>
    );
    
}
