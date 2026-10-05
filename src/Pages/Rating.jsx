import { useState } from "react"

const Rating = () => {
  const [rating,setRating]= useState(0);
  const [submittedR,setSubmittedR] = useState(0);

  const handlesubmit= ()=>{
    setSubmittedR(rating);
  }
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Rate Our Service</h2>
        <p className="text-gray-800 mb-6">How Was Your Experience? </p>
          <div className="flex justify-center gap-2 mb-5">
            {[1,2,3,4,5].map((star)=>(
          <button key={star} onClick={()=>setRating(star)} className={`text-4xl ${star<=rating ?"text-yellow-400":"text-gray-300"}`} >★</button>
       ))}
          </div>

        
        <p className="mb-4">Your rating: <span className="font-bold">{submittedR}/5</span></p>
        <button onClick={handlesubmit} className="bg-lime-500 px-5 py-3 rounded-lg  font-semibold text-xl">Submit Rating</button>
        {submittedR>0 && (
          <p className="text-green-600 font-semibold mt-4">🙏 Thank You for your rating!</p>
        )}
      </div>
    </div>
  )
}

export default Rating
