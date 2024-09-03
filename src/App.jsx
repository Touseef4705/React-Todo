import { useCallback, useMemo, useState } from 'react'
import './App.css'
import TodoInput from './Component/TodoInput'
import TodoList from './Component/TodoList'
import FilterTodo from './Component/FilterTodo'

function App() {
  const [todoList, setTodoList] = useState("")
  const [todo, setTodo] = useState([
    {
      todo : "Dahai Lana h",
      id : Date.now(),
      complete : false 
    }
  ])

  const handleTodoAdd = useCallback(()=>{ 
    const todoArray = {
        todo : todoList,
        id : Date.now(),
        complete : false
      }
    
    setTodo([...todo , todoArray])
    setTodoList("")
  },[todoList] )
  
  const handleDelTodo = useCallback((id)=>{
    const filter = todo.filter((data)=> data.id !== id)
    setTodo(filter)
  }, [todo])

  const handleToggleTodo = useCallback((id)=>{
    const todoArr = [...todo]
    const todoInd = todoArr.findIndex((data)=> data.id === id)
    todoArr[todoInd].complete = !todoArr[todoInd].complete
    setTodo(todoArr)
  }, [todo])

  const [filter, setFilter] = useState('All')

  const todosFilter = useMemo(()=> ( todo.filter((data)=>{
    if(filter == 'All'){
      return true
    }else
    if(filter == 'Complete'){
       return data.complete
    }else
    if(filter == 'UnComplete'){
      return !data.complete
    }else{
      alert("Some Error Problems")
    }
  })),[todo, filter])

  return (
    <div className='w-3/4 mx-auto'>
      <h1 className='text-center my-3 mb-10 font-mono font-bold'>Todo App With React</h1>

      <TodoInput handleTodoAdd={handleTodoAdd} onchange={(e)=> setTodoList(e.target.value)} todoValue={todoList} />

      <FilterTodo filter={filter} setFilter={setFilter} />

      <TodoList handleDelTodo={handleDelTodo} todo={todosFilter} ToggleTodo={handleToggleTodo}/>
      
    </div>
  )
}

export default App
