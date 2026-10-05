import { Moon, Sun } from "lucide-react";
import { useState ,useEffect} from "react"

const Theme = () => {
    const [darkmode,setDarkmode] =useState(false);
    const themetoggle = ()=>{
        setDarkmode(!darkmode);
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkmode);
        }, [darkmode]);
  return (
    <div className="min-h-screen bg-cyan-100 dark:bg-cyan-800 flex items-center justify-center gap-4 ">
        <div className="flex items-center gap-4 bg-black px-5 py-3 rounded-2xl shadow-2xl  ">
        {darkmode? <Sun size={24} className="text-yellow-400 fill-yellow-400"/> :<Moon size={24} className="text-yellow-400 fill-yellow-400"/>}
        <button onClick={themetoggle} className=" text-xl text-white hover:bg-grey-800 font-bold">Toggle theme </button>
        </div>
    </div>
  )
}

export default Theme
