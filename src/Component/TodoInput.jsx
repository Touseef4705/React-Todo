import { useEffect } from "react"


function TodoInput({handleTodoAdd , onchange, todoValue}){
    return(
    <div className='flex justify-center mt-5 gap-5'>
        <input className='border border-opacity-20 rounded-sm font-mono p-2' type="text" onChange={onchange} value={todoValue} placeholder='Enter Todo Name'  />
        <button disabled={todoValue === ""} style={{backgroundColor: todoValue === "" && "gray"}} className='border bg-green-600 p-2 text-white rounded-md font-serif' onClick={handleTodoAdd}>Add Todo</button>
    </div>
    )
}

export default TodoInput