import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StopWatch from './Pages/StopWatch';
import Counter from './Pages/Counter'
import DiceRoller from './Pages/DiceRoller.jsx'
import Theme from './Pages/Theme.jsx'
import PasswordGenerator from './Pages/PasswordGenerator.jsx'
import Rating from './Pages/Rating.jsx'
import CharCounter from './Pages/CharCounter.jsx'
import ContactList from './Pages/ContactList.jsx'
import ImageGallery from './Pages/ImageGallery.jsx'
import ShoppingList from './Pages/ShoppingList.jsx'
import SearchFilter from './Pages/SearchFilter.jsx'
import DigitalClock from './Pages/DigitalClock.jsx'
import WeatherApp from './Pages/WhetherApp.jsx'
import ToDo from './Pages/Todo.jsx'
import Calculator from './Pages/Calculator.jsx'

const routerProvider=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/stopwatch",
    element:<StopWatch/>
  },
  {
    path:"/counter",
    element:<Counter/>
  },
  {
    path:"/dice",
    element:<DiceRoller/>
  },
  {
    path:"/theme",
    element:<Theme/>
  },
  {
    path:"/password-generator",
    element:<PasswordGenerator/>
  },
  {
    path:"/rating",
    element:<Rating/>
  },
  {
    path:"/character-counter",
    element:<CharCounter/>
  },
  {
  path:"/calculator",
  element:<Calculator/>
},
{
  path:"/todo",
  element:<ToDo/>
},
{
  path:"/weather",
  element:<WeatherApp/>
},
{
  path:"/digital-clock",
  element:<DigitalClock/>
},
{
  path:"/search-filter",
  element:<SearchFilter/>
},
{
  path:"/shopping-list",
  element:<ShoppingList/>
},
{
  path:"/image-gallery",
  element:<ImageGallery/>
},
{
  path:"/contact-list",
  element:<ContactList/>
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider}/>
  </StrictMode>,
)
