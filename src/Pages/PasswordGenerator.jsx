import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
  let characters = "";

  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbers) {
    characters += "0123456789";
  }

  if (symbols) {
    characters += "!@#$%^&*()";
  }

  console.log(characters);
  let newpassword = "";
  for(let i=0; i < length; i++){
    const randomIndex = Math.floor(Math.random()* characters.length)
    newpassword+= characters[randomIndex];
  } 
  setPassword(newpassword);
};

const copypassword=()=>{
  navigator.clipboard.writeText(password);
};
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-6">
        
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center justify-between bg-gray-900 rounded-xl px-4 py-3 mb-6">
          <span className="font-mono font-semibold text-lime-400">
            {password}
          </span>

          <button onClick={copypassword}
          className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition">
            Copy
          </button>
        </div>

        {/* Password Length */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 text-gray-100">
            <span>Password Length</span>
            <span className="text-lime-400 font-semibold">{length}</span>
          </div>

          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e)=>setLength(Number(e.target.value))}
            className="w-full accent-lime-400 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e)=>setUppercase(e.target.checked)}
              className="accent-lime-400"
            />
            Uppercase Letters
          </label>

          <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e)=>setLowercase(e.target.checked)}
              className="accent-lime-400"
            />
            Lowercase Letters
          </label>

          <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e)=>setNumbers(e.target.checked)}
              className="accent-lime-400"
            />
            Numbers
          </label>

          <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={symbols}
              onChange={(e)=>setSymbols(e.target.checked)}
              className="accent-lime-400"
            />
            Symbols
          </label>
        </div>

        {/* Generate */}
        <button onClick={generatePassword}
         className="w-full bg-lime-400 hover:bg-lime-300 text-gray-950 font-bold py-3 rounded-xl transition">
          Generate Password
        </button>

      </div>
    </div>
  );
};

export default PasswordGenerator;