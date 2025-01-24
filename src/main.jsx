import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Workshop from './components/Workshop/Workshop'
import Login from './components/Login/Login'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'
import Contests from './components/Contest/Contest'
import TechnicalEvents from './components/TechnicalEvents/TechnicalEvents'
import ContactUs from './components/ContactUs/ContactUs'
import Accommodation from './components/Accommodation/Accommodation'
import GenAi from './components/GenAi/GenAi'
import Team from './components/Team/Team'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/Workshop' element={<Workshop />} />
      <Route path='/login' element={<Login />} />
      <Route path='/events' element={<Events />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Contests' element={<Contests />} />
      <Route path='/TechnicalEvents' element={<TechnicalEvents />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Accommodation' element={<Accommodation/>} />
      <Route path='/Workshop/GenAI' element={<GenAi />} />
      <Route path='/Team' element={<Team />} /> 
    </Route>
  )
)


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
