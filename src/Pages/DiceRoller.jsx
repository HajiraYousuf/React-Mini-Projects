import  { useState } from 'react'

const DiceRoller = () => {
  const [dice,setDice]=useState(1);
  const [rolling, SetRolling]= useState(false);

  const rollDice = ()=>{
    SetRolling(true);
    
    setTimeout(() => {
      const randomNum = Math.floor(Math.random()*6)+1;

      setDice(randomNum);
      SetRolling(false);
    }, 300);
  }

  const data = {
    1: ["col-start-2 row-start-2"  ],
    2: ["col-start-1 row-start-1" , "col-start-3 row-start-3"],
    3: ["col-start-1 row-start-1" , "col-start-2 row-start-2" , "col-start-3 row-start-3" ],
    4: ["col-start-1 row-start-1" , "col-start-3 row-start-1" , "col-start-1 row-start-3" , "col-start-3 row-start-3" ],
    5: ["col-start-1 row-start-1" , "col-start-3 row-start-1" , "col-start-1 row-start-3" , "col-start-3 row-start-3", "col-start-2 row-start-2"  ],
    6: ["col-start-1 row-start-1" , "col-start-3 row-start-1" , "col-start-1 row-start-2" , "col-start-1 row-start-3" , "col-start-3 row-start-2" , "col-start-3 row-start-3" ]
  }
  return (

    <div className='min-h-screen bg-amber-200 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-3xl font-bold'>🎲 Dice Roll</h1>
      <div className={`w-40 h-40 bg-white border-8 border-black rounded-2xl shadow-2xl p-5 grid grid-cols-3 grid-rows-3 gap-2 ${rolling ? "animate-spin" :"" }`}>
        {data[dice].map((position,index)=>{
          return(
          <span key={index}
          className={`w-7 h-7 rounded-full place-self-center bg-black ${position}`}
          ></span>
          );
        })}
      </div>
      <button onClick={rollDice} className='bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800'> Roll dice </button>
      <p className='text-xl font-semibold'>You Rolled: {dice}</p>
    </div>
  )
}

export default DiceRoller
