import { 
  Timer, Hash, Dices, SunMoon, KeyRound, 
  Star, Type, Search, ShoppingCart,  
   Calculator,  Image, Contact, ArrowRight, Code2 
} from 'lucide-react';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const App = () => {

  const projects = [
  { id: 1, title: "1. Stopwatch", desc: "A timer app with start, stop, and reset functionality.", tag: "useState & useEffect", icon: <Timer className="text-blue-500" size={24} />, path: "/stopwatch", built: true },
  { id: 2, title: "2. Counter App", desc: "Increase, decrease, or reset a number.", tag: "useState", icon: <Hash className="text-indigo-500" size={24} />, path: "/counter", built: true },
  { id: 3, title: "3. Dice Roller", desc: "Roll a dice and generate a random number.", tag: "Random Numbers", icon: <Dices className="text-purple-500" size={24} />, path: "/dice", built: true },
  { id: 4, title: "4. Calculator", desc: "Perform basic mathematical calculations.", tag: "Calculations", icon: <Calculator className="text-blue-600" size={24} />, path: "/calculator", built: true },
  { id: 5, title: "5. Todo List", desc: "Add, complete, and delete tasks.", tag: "Arrays & State", icon: <Type className="text-pink-500" size={24} />, path: "/todo", built: true },
  { id: 6, title: "6. Weather App", desc: "Check weather information for a location.", tag: "API & State", icon: <SunMoon className="text-amber-500" size={24} />, path: "/weather", built: true },
  { id: 7, title: "7. Light/Dark Toggle", desc: "Switch between light and dark themes.", tag: "Conditional UI", icon: <SunMoon className="text-yellow-500" size={24} />, path: "/theme", built: true },
  { id: 8, title: "8. Password Generator", desc: "Generate strong and secure passwords.", tag: "Logic & Strings", icon: <KeyRound className="text-emerald-500" size={24} />, path: "/password-generator", built: true },
  { id: 9, title: "9. Rating App", desc: "Rate something using interactive stars.", tag: "Click Events", icon: <Star className="text-yellow-500" size={24} />, path: "/rating", built: true },
  { id: 10, title: "10. Character Counter", desc: "Count characters and show the remaining limit.", tag: "Input Handling", icon: <Type className="text-pink-500" size={24} />, path: "/character-counter", built: true },
  { id: 11, title: "11. Digital Clock", desc: "Display the current time in real time.", tag: "Date & useEffect", icon: <Timer className="text-cyan-500" size={24} />, path: "/digital-clock", built: true },
  { id: 12, title: "12. Search Filter", desc: "Search and filter items from a list.", tag: "Array.filter()", icon: <Search className="text-cyan-500" size={24} />, path: "/search-filter", built: true },
  { id: 13, title: "13. Shopping List", desc: "Add and remove items from a shopping list.", tag: "Arrays & State", icon: <ShoppingCart className="text-orange-500" size={24} />, path: "/shopping-list", built: true },
  { id: 14, title: "14. Image Gallery", desc: "Display and filter a collection of images.", tag: "Arrays & UI", icon: <Image className="text-rose-500" size={24} />, path: "/image-gallery", built: true },
  { id: 15, title: "15. Contact List", desc: "Manage contacts using a form and state.", tag: "Forms & State", icon: <Contact className="text-sky-500" size={24} />, path: "/contact-list", built: true }
];
    const [SearchTerm,SetSearchTerm]=useState("");
  const [selectedProject, setSelectedProject] = useState(null);
    const filteredProjects = projects.filter( p => 
      p.title.toLowerCase().includes(SearchTerm.toLowerCase())||
      p.tag.toLowerCase().includes(SearchTerm.toLowerCase())
    );

    const navigate=useNavigate();

    const handleProjectClick = (project) => {
  if (project.built) {
    navigate(project.path);
  } else {
    setSelectedProject(project);
  }
};

  return (

    <div className='min-h-screen bg-slate-900 text-slate-100 font-sans'>
            {/* Header */}
        <header className='bg-slate-800 border-b border-slate-700 py-12 px-6 text-center '>
          <div className='max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium mb-4 border border-blue-500/20'>
            <Code2 size={16} /> React Practice Portfolio
            </div>
            <h1 className='text-slate-400 text-lg max-w-2xl mx-auto mb-8'>React 15 Mini Projects Hub</h1>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto mb-8'>Here are 15 mini projects. Choose a project to start building!</p>
            
            {/* Search Bar */}
            <div className='max-w-md mx-auto relative'>
              <Search className='absolute left-4 top-3.5 text-slate-400' size={20}/>
              <input type="text"placeholder='Search Project ....' 
              value={SearchTerm} onChange={(e) => SetSearchTerm(e.target.value)}
              className='w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all shadow-inner'/>
            </div>
          </div>
        </header>

        {/* Projects Grid */}
        <main className='max-w-7xl mx-auto px-6 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProjects.map((project)=>(
              <div key={project.id}
              onClick={()=>handleProjectClick(project)}
              className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:scale-110 transition-transform'>
                        {project.icon}
                    </div>
                    <span className='text-xs font-semibold px-3 py-1 bg-slate-700/50 text-slate-300
                    rounded-full border border-slate-600/50'>{project.tag}</span>
                  </div>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors'>{project.title}</h3>
                  <p className='text-slate-400 text-sm mb-6'>{project.desc}</p>
                </div>
                <div className='flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform'>
                  <span>Open Project</span>
                  <ArrowRight size={16} className='ml-2' />
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* footer */}
        <footer className='border-t border-slate-800 py-6 text-center text-slate-500 text-sm'>
          <p>© 2026 React Mini Projects Hub.</p>
        </footer>
    {/* Pop-up yar oo shaqaynaya marka built: false yahay */}
{selectedProject && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-200">
      <h3 className="text-xl font-bold text-slate-100 mb-2">
        {selectedProject.title}
      </h3>
      <p className="text-slate-400 text-sm mb-6">
        Mashruucan weli lama dhisin (<span className="text-amber-400 font-mono">built: false</span>). Dhawaan ayaa la soo kordhin doonaa!
      </p>
      <button
        onClick={() => setSelectedProject(null)}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
      >
        Ku noqo Home
      </button>
    </div>
  </div>
)}
    </div>

  )
}

export default App;
