import axios from 'axios';
import  { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { WiHumidity, WiStrongWind } from 'react-icons/wi'

const WeatherApp = () => {
  const [weather,setWeather]=useState();
  const [city,setCity]=useState();
  
  const search = async (cityName) => {
    try{
      const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=159ec4ddaf8e2270f3f108608011690b`);
      setWeather(data)

    }catch(err){
      console.log(err)
      setWeather(null);
    }
  }
useEffect(()=>{
  // eslint-disable-next-line react-hooks/set-state-in-effect
  search("hargeisa")
},[])  

const getIcon=()=>{
  const icon=weather.weather[0].icon
  return  `https://openweathermap.org/img/wn/${icon}@2x.png`
}

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600'>
      {weather ? (
    <div className='bg-white/2 backdrop-blur-lg shadow-2xl rounded-2xl w-96 p-8 text-center'>
    <div className='relative mb-6'>
      <input type="text" placeholder="Enter city ...." 
        value={city}
       onChange={(e)=> setCity(e.target.value)}
       onKeyDown={(e)=> e.key=== "Enter" && search(city)}
      className='w-full p-3 pl-12 rounded-full bg-white/80 focus:outline-none ' />
      <BiSearch  onClick={()=>search(city )}
      className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl cursor-pointer'/>
    </div>
 <img src={getIcon()} alt={weather.weather[0].main} className='w-28 mx-auto mb-4' />
 <h1 className='text-white text-6xl font-bold '>{Math.round(weather.main.temp)}°C</h1>
 <p className='text-white text-2xl mt-2 '>{weather.name}</p>
 
 
          {/* Bottom Section */}
          <div className="flex justify-between items-center mt-8 text-white">
            <div className="flex items-center gap-3">
              <WiHumidity className="text-4xl text-black" />
              <div>
                <p className="text-lg font-semibold">{weather.main.humidity}%</p>
                <p className="text-sm opacity-80">Humidity</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <WiStrongWind className="text-4xl text-black" />
              <div>
                <p className="text-lg font-semibold">{weather.wind.speed}km/h</p>
                <p className="text-sm opacity-80">Wind Speed</p>
              </div>
            </div>
          </div>

    </div>
      ):(
        <p className='text-white text-xl'>Loading....</p>
      )}
    </div>
  )
}

export default WeatherApp