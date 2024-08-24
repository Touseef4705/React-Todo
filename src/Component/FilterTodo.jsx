function FilterTodo({filter, setFilter}){
    return(
        <div className='flex flex-row my-3 justify-center gap-6'>
        <button onClick={()=> setFilter('All')} className={`${filter == 'All' ? "bg-teal-500 text-white"  : "bg-teal-100" } py-2 px-3 rounded-md hover:bg-teal-600` }>All</button>
        <button onClick={()=> setFilter('Complete')} className={`${filter == 'Complete' ? "bg-teal-500 text-white"  : "bg-teal-100" } py-2 px-3 rounded-md hover:bg-teal-600` }>Complete</button>
        <button onClick={()=> setFilter('UnComplete')} className={`${filter == 'UnComplete' ? "bg-teal-500 text-white"  : "bg-teal-100" } py-2 px-3 rounded-md hover:bg-teal-600` }>UnComplete</button>
      </div>
    )
}

export default FilterTodo