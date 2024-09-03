import { useEffect } from "react"


function TodoInput({ handleTodoAdd, onchange, todoValue }) {
    return (
        <div className="flex justify-center mt-6 gap-4">
            <input
                className="border border-gray-300 rounded-md font-mono p-3 w-2/3 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                type="text"
                onChange={onchange}
                value={todoValue}
                placeholder="Enter Todo Name"/>
            <button
                disabled={todoValue === ""}
                style={{ backgroundColor: todoValue === "" ? "black" : undefined }}
                className={`${todoValue === "" ? "cursor-not-allowed bg-black" : "bg-green-600 hover:bg-green-700"
                    } p-3 text-white rounded-md font-serif shadow-md transition duration-300 transform hover:scale-105`}
                onClick={handleTodoAdd}>
                Add Todo
            </button>
        </div>

    )
}

export default TodoInput