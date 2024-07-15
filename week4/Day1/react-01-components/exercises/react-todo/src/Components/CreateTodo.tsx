import React, { useState } from 'react'

export interface ToDo {
  id: number;
  task: string;
  complete: boolean;
}

const CreateTodo = (props:any) => {
    const [task, setTask] = useState("");
    const hadleInput = (e: any) => setTask(e.target.value)
  const onSave = () => {
    props.sendData(task)
    
  }
  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onInput={(event)=>hadleInput(event)}
      ></input>
      <button type='button' onClick={onSave}>save</button>
    </div>
  );
}

export default CreateTodo