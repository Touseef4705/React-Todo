import { useEffect } from "react"

function TodoList({ todo, handleDelTodo, ToggleTodo }) {
    return (
        <>
            {
                todo.map((data, ind) => {
                    return (
                        <div key={ind} className="flex items-center bg-white shadow-lg rounded-lg w-4/5 md:w-2/5 mx-auto my-4 p-4">
                            <h3
                                className={`text-xl md:text-2xl font-sans font-semibold flex-1 pl-2 cursor-pointer transition-colors duration-300 ${data.complete ? "line-through text-gray-400" : "text-gray-800"
                                    }`}
                                onClick={() => ToggleTodo(data.id)}
                            >
                                {data.todo}
                            </h3>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105"
                                onClick={() => handleDelTodo(data.id)}
                            >
                                Delete
                            </button>
                        </div>

                    )
                })
            }
        </>
    )
}

export default TodoList