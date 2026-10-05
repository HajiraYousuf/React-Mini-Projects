import  { useState } from 'react'

const Calculator = () => {
  const [input,setInput]=useState("");

  const handleclick=(value)=>{
    setInput(input+value);
  };

  const handleClear=()=>{
    setInput("");
  };

  const handleDelete=()=>{
    setInput(input.slice(0,-1));
  };

  const handleEqual=()=>{
    try{
    setInput(eval(input).toString());
    }catch(err){
      console.log(err)
    }
  };
  return (
    <div className=' bg-gradient-to-br to-black/70 from-gray-900 h-screen flex items-center justify-center'>
      <div className='bg-black/70 backdrop-blur-lg shadow-2xl rounded-2xl w-96 p-5 text-center'>
      <div className='relative mb-6'>
        <input type="text" value={input} readOnly placeholder='Calculate' className='w-full rounded-lg p-6 bg-gray-800 text-white text-2xl text-right' />
      </div><div className='grid grid-cols-4 gap-4 text-white'>

  <button className='bg-red-600 hover:bg-red-700 hover:scale-110 transition duration-200 p-5 rounded-xl text-xl font-semibold shadow-lg ' onClick={handleClear}>AC</button>
  <button className='bg-gray-600 hover:bg-gray-500 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={handleDelete}>DEL</button>
  <button className='bg-gray-600 hover:bg-gray-500 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("%")}>%</button>
  <button className='bg-teal-300 hover:bg-teal-400 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("/")}>/</button>

  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("7")}>7</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("8")}>8</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("9")}>9</button>
  <button className='bg-teal-300 hover:bg-teal-400 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("*")}>*</button>

  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("4")}>4</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("5")}>5</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("6")}>6</button>
  <button className='bg-teal-300 hover:bg-teal-400 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("-")}>-</button>

  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("1")}>1</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("2")}>2</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("3")}>3</button>
  <button className='bg-teal-300 hover:bg-teal-400 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick("+")}>+</button>

  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg col-span-2 hover:scale-110 transition duration-200' onClick={()=>handleclick("0")}>0</button>
  <button className='bg-gray-800 hover:bg-gray-800 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={()=>handleclick(".")}>.</button>
  <button className='bg-teal-300 hover:bg-teal-400 p-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-110 transition duration-200' onClick={handleEqual}>=</button>

</div>
      </div>
    </div>
  )

}

export default Calculator
