import { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time,setTime]=useState(new Date());

useEffect(() => {
    const Interval=setInterval(() =>{
        setTime(new Date());
    },1000)

    return() => clearInterval(Interval)
},[]);

const hours = time.getHours() % 12 || 12 ;
const minutes = time.getMinutes().toString().padStart(2, "0");
const seconds = time.getSeconds().toString().padStart(2, "0");
const ampm = time.getHours() >= 12 ? "PM" : "AM" ;

const date = time.toDateString();

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-tl from-amber-600 to-yellow-300'>
      <div className='rounded-3xl shadow-2xl backdrop-blur-lg bg-white/35 p-10  text-black  text-center'>
        <h1 className='text-5xl font-bold tracking-widest'>
        {hours}:{minutes}:{seconds}
        <span className='ml-2 text-xl'>{ampm}</span>
        </h1>
        <p className='mt-4 text-lg opacity-80'> {date} </p>
      </div>
    </div>
  )
}

export default DigitalClock