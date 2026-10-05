import { useState } from "react"

const Counter = () => {
  const [count,setCount]=useState(1);
  return (
    <div className="bg-fuchsia-300 min-h-screen p-12">
      <h1 className="text-2xl text-center font-bold mb-4">Counter App</h1>
      <div className="bg-fuchsia-200 w-2/3 rounded-xl shadow-2xl p-4">
      <div className="flex items-center justify-between">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpJ_waBomTWMsQgrdqKd7hJBVtOfhDjlNDBlEK47l5A&s" width={100} height={100} className="rounded-md  "/>
        <div className="flex items-center justify-between gap-6">
          <button onClick={()=>setCount(count+1)}
          className=" px-4 py-2 text-xl font-bold bg-slate-800 text-white rounded-md shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-200 ">+</button>
          <input value={count} onChange={(e)=>setCount(Number(e.target.value))}
          type="number" className="border-3 border-slate-700 rounded-md w-12 h-8 text-center font-bold  " />
          <button onClick={()=> setCount(count>1 ? count-1 : 1)}
          className="px-4 py-2 text-xl font-bold bg-slate-800 text-white rounded-md shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-200">-</button>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-rose-600 hover:scale-105 transition-all duration-200">remove</button>
      </div>
      </div>
    </div>
  )
}

export default Counter
