function FilterTodo({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap justify-center my-4 gap-4">
      <button
        onClick={() => setFilter('All')}
        className={`${filter === 'All' ? "bg-teal-600 text-white" : "bg-teal-200 text-teal-800"
          } py-2 px-4 rounded-full font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-700 hover:text-white`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Complete')}
        className={`${filter === 'Complete' ? "bg-teal-600 text-white" : "bg-teal-200 text-teal-800"
          } py-2 px-4 rounded-full font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-700 hover:text-white`}
      >
        Complete
      </button>
      <button
        onClick={() => setFilter('UnComplete')}
        className={`${filter === 'UnComplete' ? "bg-teal-600 text-white" : "bg-teal-200 text-teal-800"
          } py-2 px-4 rounded-full font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-700 hover:text-white`}
      >
        UnComplete
      </button>
    </div>

  )
}

export default FilterTodo