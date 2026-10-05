import  { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const ToDo = () => {

  const [todos, setTodos] = useState(() =>{
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved):[]
  })

  const [task, setTask] = useState("")


  // ✅ SAVE todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // ✅ ADD TASK
  const addTask = () => {
    if (!task.trim()) return

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }

    setTodos([...todos, newTask])
    setTask("")
  }

  // ✅ DELETE TASK
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // ✅ TOGGLE COMPLETE
  const toggleTask = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  return (
    <div className='h-screen bg-purple-700 flex items-center justify-center'>
      
      <div className='bg-slate-950 w-96 p-8 text-white rounded-xl shadow-lg'>
        
        <h1 className='text-2xl text-center mb-6 font-bold'>
          Get Things Done!
        </h1>

        {/* INPUT */}
        <div className="flex gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Enter task..."
            className="flex-1 border border-gray-500 p-2 rounded bg-transparent outline-none"
          />

          <button
            onClick={addTask}
            className="bg-purple-600 px-4 rounded hover:bg-purple-500 transition">
            Add
          </button>
        </div>

        {/* TASK LIST */}
        <ul className='mt-6 space-y-3'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='flex items-center justify-between bg-purple-700 p-3 rounded hover:bg-purple-600 transition'
            >

              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTask(todo.id)}
                  className='size-4 cursor-pointer'
                />

                <span
                  className={
                    todo.completed
                      ? "line-through text-gray-300"
                      : ""
                  }>
                  {todo.text}
                </span>
              </div>

              <FaTrash
                onClick={() => deleteTask(todo.id)}
                className='cursor-pointer hover:text-red-400'
              />

            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default ToDo