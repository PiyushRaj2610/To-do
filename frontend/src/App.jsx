import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  function setTheTodo() {
    fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  }

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTheTodo}></CreateTodo>
      <Todos todos={todos} setTodos={setTheTodo} ></Todos>
    </div>
  )
}

export default App
