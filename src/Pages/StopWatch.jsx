import  { useEffect, useState } from 'react'


const StopWatch = () => {
  const[time,setTime]=useState(0);
  const[isRunning,setIsRunning]=useState(false);
  let milliseconds = String(Math.floor(time / 10) % 100).padStart(2, "0");
  let seconds = String(Math.floor(time/1000) % 60).padStart(2,"0");
  let minutes = String(Math.floor(time /(1000 *60))%60).padStart(2,"0");
  let hours =String(Math.floor(time/(1000*60*60))).padStart(2,"0");
  useEffect(()=>{
    let interval=null;
    if (isRunning){
      interval = setInterval(()=>{
        setTime((prevTime)=>prevTime+10);
      },10);
    }else{
      clearInterval(interval);
    }
    return ()=> clearInterval(interval);
  },[isRunning]);
  return (
    <div className='min-h-screen text-white bg-slate-900 flex items-center justify-center'>
      <div className='bg-slate-800/80 shadow-2xl rounded-2xl border border-slate-700 p-8 w-auto text-center backdrop-blur-md '>
          <h1 className='text-2xl text-slate-300 font-bold mb-6 tracking-wider'>STOPWATCH</h1>
          <div className='text-4xl font-bold font-mono tracking-widest bg-slate-900/60 text-emerald-400 p-4 mb-8 border border-slate-700/50 
          shadow-inner rounded-xl '>{hours}:{minutes}:{seconds}:<span className='text-2xl'>{milliseconds}</span></div>
          <div className="flex justify-center gap-3">
            <button onClick={()=> setIsRunning(true)}
             className='flex-1 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition duration-200 bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/30'>Start</button>
            <button onClick={()=> setIsRunning(false)}
             className='flex-1 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition duration-200 bg-amber-600 hover:bg-amber-500 shadow-amber-900/30'>Pause</button>
            <button onClick={()=>{ setIsRunning(false); setTime(0);}}
            className='flex-1 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition duration-200 bg-rose-600/80 hover:bg-red-600 shadow-red-900/30'>Stop</button>
          </div>
      </div>
    </div>
  )
}

export default StopWatch
