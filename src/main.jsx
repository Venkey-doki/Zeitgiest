import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Workshop from './Pages/Workshop'
import Login from './Pages/Login'
import Events from './Pages/Events'
import Gallery from './Pages/Gallery'
import Contests from './Pages/Contests'
import About from './Pages/About'
import TechnicalEvents from './Pages/TechnicalEvents'
import Accommodation from './Pages/Accommodation'
import GenAi from './Pages/GenAi/GenAi'
import CloudComputing from './Pages/CloudComputing/CloudComputing'
import CyberSecurity from './Pages/CyberSecurity/CyberSecurity'
import DevOps from './Pages/DevOps/DevOps'
import Team from './Pages/Team'
import Profile from './Pages/Profile'
import Registration from './Pages/Registration'
import Sponsors from './Pages/Sponsors'
import OnlineEvents from './Pages/OnlineEvents'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/Workshop' element={<Workshop />} />
      <Route path='/login' element={<Login />} />
      <Route path='/events' element={<Events />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Contests' element={<Contests />} />
      <Route path='/About' element={<About />} />
      <Route path='/TechnicalEvents' element={<TechnicalEvents />} />
      <Route path='/Accommodation' element={<Accommodation/>} />
      <Route path='/Workshop/GenAI' element={<GenAi />} />
      <Route path='/Workshop/CloudComputing' element={<CloudComputing />} />
      <Route path='/Workshop/CyberSecurity' element={<CyberSecurity />} />
      <Route path='/Workshop/DevOps' element={<DevOps />} />
      <Route path='/Team' element={<Team />} /> 
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/Registration' element={<Registration />}/>
      <Route path='/Sponsors' element={<Sponsors />} />
      <Route path='/OnlineEvents' element={<OnlineEvents/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
