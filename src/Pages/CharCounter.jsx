import { useState } from "react";

const CharCounter = () => {
    const MAX=280;
    const[text,setText]=useState("");
    const lan=text.length;
    const left = MAX-lan;
    const pct = Math.min((lan/MAX)*100,100);

    const getState= ()=>{
        if (lan === 0 || pct < 75)
      return {
        bar: "bg-violet-400",
        text: "text-violet-300",
        tag: "bg-violet-900 text-violet-300",
        label: "Good",
        hint: "text-violet-400",
        hintText: `You have ${left} characters remaining.`,
      };

    if (pct < 90)
      return {
        bar: "bg-amber-400",
        text: "text-amber-300",
        tag: "bg-amber-900 text-amber-300",
        label: "Almost there",
        hint: "text-amber-400",
        hintText: `Getting close — ${left} left.`,
      };

    if (pct < 100)
      return {
        bar: "bg-orange-400",
        text: "text-orange-300",
        tag: "bg-orange-900 text-orange-300",
        label: "Almost full",
        hint: "text-orange-400",
        hintText: `Only ${left} characters left!`,
      };

    return {
      bar: "bg-red-400",
      text: "text-red-300",
      tag: "bg-red-900 text-red-300",
      label: "Limit reached",
      hint: "text-red-400",
      hintText: "You've reached the limit!",
    };
    }

     const s= getState();

  return (
    <div className="min-h-screen bg-[#0f0a1e] flex items-center justify-center">
        <div className="bg-[#1a1030] font-mono max-w-xl w-full p-8 rounded-lg shadow-2xl border border-blue-800">
            <h1 className="text-xl  text-violet-300 ">Character Counter</h1>
            <p className="text-violet-500 mb-4 text-sm">Share your Opinion</p>
            <span className={`rounded-full inline-block mb-4 font-medium px-3 py-1 ${s.tag}`}>{s.label}</span>
            <p className="text-violet-500 text-xs tracking-widest mb-2">YOUR MESSAGE</p>
            <textarea 
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, MAX))}
          placeholder="Start typing your message here..."
           className="w-full bg-[#0f0a1e] border-2 border-violet-800 rounded-xl p-4 text-sm text-violet-100
            resize-none outline-none leading-relaxed focus:border-violet-500 transition-colors"/>
            <div className="flex items-center mt-4 gap-3">
                <div className="flex-1 h-1 bg-violet-950 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-150 ${s.bar}`} style={{width: `${pct}%`}}></div>
                </div>
                <span className={`text-xs font-medium whitespace-nowrap text-right ${s.text}`}>{lan}/{MAX}</span>
            </div>
              <p className={`mt-3 text-xs ${s.hint}`}>{s.hintText}</p>
        </div>
      
    </div>
  )
}

export default CharCounter
