import { useEffect } from "react"

function TodoList({todo, handleDelTodo, ToggleTodo}){
    return(
        <>
            {
                todo.map((data, ind)=>{
                return(
                    <div key={ind} className='flex bg-slate-200 rounded-md w-3/6 mx-auto my-4'>
                    <h3 className='text-2xl select-none cursor-pointer font-mono font-medium flex-1 pl-2 pt-1' onClick={()=> ToggleTodo(data.id)} style={{textDecoration : data.complete === true && "line-through"}}>{data.todo}</h3>
                    <button className='border-none rounded-md text-white bg-red-400 p-2 px-3' onClick={ ()=> handleDelTodo(data.id)}>Delete</button>
                    </div>
                )
                })
            }
        </>
    )
}

export default TodoList