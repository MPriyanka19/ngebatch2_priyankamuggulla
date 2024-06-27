import { useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
import CreateTodo from './Components/CreateTodo'


const App = () => {
  // eslint-disable-next-line
  const todos = [
    {
      id: 1,
      task: 'Walk the Dog',
      complete: false,
    },
    {
      id: 2,
      task: 'Feed the Cat',
      complete: true,
    },
    {
      id: 3,
      task: 'Call Dave',
      complete:false,
    }
  ]
const [tasks, setTasks] = useState(todos);
const setTodo = (task: any) => {
  var obj = {
    id: tasks.length + 1,
    task: task,
    complete: false,
  };
  console.log(obj);
  setTasks((tasks) => [...tasks, obj]);
};

  return (
    <div className="App">
      <h1>Todo</h1>
      {/* your code goes here... */}
      <TodoList todosArray={tasks} />
      <CreateTodo sendData={ setTodo} />
    </div>
  );
}

export default App



















 // const [tasks, setTask] = useState(todos)
 
  // const handleTask = (todoId: number) => {
  //   const todosCopy = [...todos];
  //   todosCopy.forEach((todo) => {
  //     if (todo.Id = todoId)
  //       todo.complete = !todo.complete
  //   })
  //   setTask(todosCopy)
  // }